import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

interface AuthContextProps {
    token: string;
    setToken: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        } else {
            router.push("/pages/login"); // Redirect to login if not authenticated
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        router.push("/pages/login");
    };

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
