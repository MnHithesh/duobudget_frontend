import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  mode: "individual" | "couple";
}

interface AuthContextType {
  user: UserData | null;
  signin: (data: UserData) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("duobudget_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const signin = (data: UserData) => {
    localStorage.setItem("duobudget_user", JSON.stringify(data));
    setUser(data);
    navigate("/dashboard", { replace: true });
  };

  const signout = () => {
    localStorage.removeItem("duobudget_user");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
