import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
type SnackbarType = 'success' | 'error' | 'info' | 'warning';

interface SnackbarState {
    open: boolean;
    message: string;
    type: SnackbarType;
}

interface SnackbarContextValue {
    showSnackbar: (type: SnackbarType, message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextValue | undefined>(undefined);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw new Error('useSnackbar must be used within SnackbarProvider');
    return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        type: 'info',
    });

    const showSnackbar = useCallback((type: SnackbarType, message: string) => {
        setSnackbar({ open: true, type, message });

        setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 3500);
    }, []);

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            {snackbar.open && (
                <div className={`snackbar snackbar--${snackbar.type}`}>
                    <span className="snackbar__icon">{getIcon(snackbar.type)}</span>
                    <span className="snackbar__message">{snackbar.message}</span>
                </div>
            )}
        </SnackbarContext.Provider>
    );
};

function getIcon(type: SnackbarType) {
    switch (type) {
        case 'success': return '✅';
        case 'error': return '❌';
        case 'info': return 'ℹ️';
        case 'warning': return '⚠️';
        default: return '🔔';
    }
}
