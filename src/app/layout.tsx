"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "./layout/header";
import Footer from "./layout/footer";
import { NotificationProvider } from "./context/NotificationContext";
import { LoginProvider } from "./context/LoginContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <LoginProvider>
            <Container fixed maxWidth={false} disableGutters>
              <Header />
              <NotificationProvider>
                <Box sx={{ bgcolor: '#EEEEFF', height: '100vh', width: '100%' }}>
                  {children}
                </Box>
              </NotificationProvider>
              <Footer />
            </Container>
          </LoginProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
