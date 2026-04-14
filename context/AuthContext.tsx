'use client'
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type AuthContextType = {
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void,
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider  ({children}: {children: ReactNode}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isLoggedIn");
        if (stored === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    }

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}