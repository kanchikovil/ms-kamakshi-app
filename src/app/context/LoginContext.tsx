"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Define types for Auth Context
interface LoginContextType {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

// Create the context
const LoginContext = createContext<LoginContextType | null>(null);

// Custom hook for easy access
export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useAuth must be used within an LoginProvider");
    }
    return context;
};

// Utility function to get token
export const getToken = () => {
    return typeof window !== "undefined" ? localStorage.getItem("token") : null;
};

// LoginProvider component to wrap the app
export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check login status on app load
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!getToken());
    }, []);

    // Login function
    const login = (token: string) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};
