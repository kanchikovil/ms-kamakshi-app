"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLogin } from "../context/LoginContext";

function LogoImage() {
    return <Box component={"img"} src="/images/swami.png" alt="Image" width={35} height={35} />;
}

export default function Header() {
    const router = useRouter();
    const { isLoggedIn, logout } = useLogin();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#0F0359 " }}>
                    <Link href={"/"}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: "white" }}>
                            <LogoImage />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Manasasmarami Kamakshi
                    </Typography>

                    {isLoggedIn ? (
                        <Button variant="outlined" sx={{ color: "white" }} onClick={() => { logout(); router.push("/pages/login"); }}>
                            Logout
                        </Button>
                    ) : (
                        <Link href={"/pages/login"}>
                            <Button variant="outlined" sx={{ color: "white" }}>Admin Login</Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
