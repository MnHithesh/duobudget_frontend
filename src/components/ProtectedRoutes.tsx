
import { Navigate, useLocation } from "react-router-dom";

/**
 * This component protects private routes like /dashboard.
 * It redirects unauthenticated users to the login page.
 */
export default function ProtectedRoute({ children }: { children: React.ReactElement }) {
    const location = useLocation();

    // Example: check if user exists in localStorage
    // In a real app, replace this with your AuthContext or API token check
    const user = localStorage.getItem("duobudget_user");

    // If user not found → redirect to login
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If user exists → show the requested page
    return children;
}
