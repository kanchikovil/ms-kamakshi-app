"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import APP_CONFIG from "./config";

interface WithAuthProps {
    children: React.ReactNode;
}

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const AuthComponent = (props: P) => {
        const [isLoading, setIsLoading] = useState(true);
        const [isAuthorized, setIsAuthorized] = useState(false);
        const router = useRouter();

        useEffect(() => {
            const checkAuth = async () => {
                const token = localStorage.getItem("token");

                if (!token) {
                    router.push("/pages/login"); // Redirect if no token
                    return;
                }

                try {
                    const response = await axios.get(APP_CONFIG.apiBaseUrl + "/verifyToken", {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    if (response.data.role === "ADMIN") {
                        setIsAuthorized(true);
                    } else {
                        router.push("/pages/login"); // Redirect if not admin
                    }
                } catch (error) {
                    localStorage.removeItem("token");
                    router.push("/pages/login");
                } finally {
                    setIsLoading(false);
                }
            };

            checkAuth();
        }, [router]);

        if (isLoading) return <p>Loading...</p>;

        return isAuthorized ? <WrappedComponent {...props} /> : null;
    };

    return AuthComponent;
};

export default withAuth;
