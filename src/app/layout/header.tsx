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
import Divider from "@mui/material/Divider";

function LogoImage() {
    return <Box component={"img"} src="/images/swami.png" alt="Image" width={35} height={35} />;
}

export default function Header() {
    const router = useRouter();
    const { isLoggedIn, logout } = useLogin();

    return (
         <AppBar position="fixed" sx={{ width: '100vw', backgroundColor:'#642210', height:'7vh' }}>
           <Toolbar sx={{pb:2}}>
           <Link href={'/'}>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontSize: 24, fontWeight: '900', fontFamily: 'Arima Madurai' }}>
               ManasasmaramiKamakshi
             </Typography>
             </Link>
             <Button color="inherit">Books</Button>
             <Button color="inherit">Articles</Button>
             <Divider orientation="vertical" flexItem sx={{ height: 10, alignSelf: 'center' }} />
                     <Link href={'/admin'}>
             <Button color="inherit">Login</Button>
             </Link>
           </Toolbar>
         </AppBar>    );
}
