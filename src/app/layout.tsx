"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "./layout/header";
import Footer from "./layout/footer";
import { NotificationProvider } from "./context/NotificationContext";
import { LoginProvider } from "./context/LoginContext";

const theme = createTheme({
  typography: {
    fontFamily: [
      `Arima Madurai`, `-apple-system`, `Helvetica`, `sans-serif`
    ].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        }
      }
    }, MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f0f0',
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          '&.Mui-selected': {
            backgroundColor: '#693108',
            color: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#693108', // Default background color
          color: 'white', // Text color
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#75762a', // Darker shade on hover
          },
          '&:disabled': {
            backgroundColor: '#DDDDDDFF', // Disabled state color
            color: '#979797FF',
          },
        },
      },
    },
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link
          href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LoginProvider>
            <Container
              disableGutters
              maxWidth={false}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Ensures full height layout
                bgcolor: '#F6F1F1',
              }}
            >
              <Header />
              <NotificationProvider>
                {/* This is the main scrollable area */}
                <Box component="main" sx={{ flex: 1 }}>
                  {children}
                </Box>
              </NotificationProvider>
              <Footer /> {/* Now footer stays at the bottom correctly */}
            </Container>
          </LoginProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

