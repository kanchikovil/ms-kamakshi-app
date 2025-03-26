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
    return <Box component={"img"} src="/images/logo.png" alt="Image" width={'auto'} height={15} />;
}

export default function Header() {
    const router = useRouter();
    const { isLoggedIn, logout } = useLogin();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar style={{
                    backgroundColor: "#642210",
                    height: "65px",
                    width: "100%",
                    backgroundImage: "linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.1)), url('/images/repeat-bg-pattern.jpg')",
                    backgroundRepeat: "repeat-x",
                    position: "sticky",
                    top: 0,
                    zIndex: 100
                }}>
                    <Box component="div" sx={{ flexGrow: 1, marginLeft: '2%' }}>
                        <Link href={"/"}>
                            <LogoImage />
                        </Link>
                    </Box>

                    {isLoggedIn ? (
                        <Button style={{ textTransform: 'none' }} sx={{ color: "#CDC4C1", fontWeight: 700 }} onClick={() => { logout(); router.push("/pages/login"); }}>
                            Logout
                        </Button>
                    ) : (
                        <Link href={"/pages/login"}>
                            <Button style={{ textTransform: 'none' }} sx={{ color: "#CDC4C1", fontWeight: 700 }}>Login</Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
