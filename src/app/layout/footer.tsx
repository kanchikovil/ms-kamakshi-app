"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useLogin } from "../context/LoginContext";
import Container from "@mui/material/Container";

export default function Footer() {
    const router = useRouter();
    const { isLoggedIn, logout } = useLogin();

    return (
      <Box sx={{ bgcolor: '#CFC4C4', color: 'white', p: 2, ml:-5, position: 'fixed', bottom: 0, width: '100%', height:'5vh' }}>
      <Container maxWidth="100%" disableGutters>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} My Landing Page. All rights reserved.
        </Typography>
      </Container>
    </Box>  );
}
