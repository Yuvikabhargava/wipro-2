import { createContext, useState } from "react";

// Creating Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("auth") === "true"
    );

    // Simulate Login
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("auth", "true");
    };

    // Simulate Logout
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
