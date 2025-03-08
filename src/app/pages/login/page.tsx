"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import APP_CONFIG from "@/app/utils/config";
import { useLogin } from "@/app/context/LoginContext";

export default function LoginPage() {
    const { login } = useLogin();
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // Clear previous errors

        try {
            const response = await axios.post<{ token: string }>(APP_CONFIG.apiBaseUrl + "/login", {
                userName,
                password,
            });
            localStorage.setItem("token", response.data.token);
            login(response.data.token); // Set token in context
            router.push("/admin"); // Redirect to admin page
        } catch (err: any) {
            login(""); // Set token in context
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 8,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Admin Login
                </Typography>

                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

                <form onSubmit={handleLogin} style={{ width: "100%" }}>
                    <TextField
                        label="Username"
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
