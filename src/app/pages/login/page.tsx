// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
// import APP_CONFIG from "@/app/utils/config";
// import { useLogin } from "@/app/context/LoginContext";

// export default function LoginPage() {
//     const { login } = useLogin();
//     const [userName, setUserName] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const [error, setError] = useState<string | null>(null);
//     const router = useRouter();

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setError(null); // Clear previous errors

//         try {
//             const response = await axios.post<{ token: string }>(APP_CONFIG.apiBaseUrl + "/login", {
//                 userName,
//                 password,
//             });
//             localStorage.setItem("token", response.data.token);
//             login(response.data.token); // Set token in context
//             router.push("/admin"); // Redirect to admin page
//         } catch (err: any) {
//             login(""); // Set token in context
//             setError(err.response?.data?.message || "Login failed. Please try again.");
//         }
//     };

//     return (
//         <Container maxWidth="xs">
//             <Box
//                 sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     mt: 8,
//                     p: 3,
//                     boxShadow: 3,
//                     borderRadius: 2,
//                     backgroundColor: "white",
//                 }}
//             >
//                 <Typography variant="h5" gutterBottom>
//                     Admin Login
//                 </Typography>

//                 {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

//                 <form onSubmit={handleLogin} style={{ width: "100%" }}>
//                     <TextField
//                         label="Username"
//                         type="text"
//                         variant="outlined"
//                         fullWidth
//                         margin="normal"
//                         value={userName}
//                         onChange={(e) => setUserName(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="Password"
//                         type="password"
//                         variant="outlined"
//                         fullWidth
//                         margin="normal"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//                         Login
//                     </Button>
//                 </form>
//             </Box>
//         </Container>
//     );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  IconButton,
  Snackbar,

} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import APP_CONFIG from "@/app/utils/config";
import { useLogin } from "@/app/context/LoginContext";
import ErrorIcon from '@mui/icons-material/Error';



export default function LoginPage() {
  const { login } = useLogin();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post<{ token: string }>(
        APP_CONFIG.apiBaseUrl + "/login",
        { userName, password }
      );
      localStorage.setItem("token", response.data.token);
      login(response.data.token);
      router.push("/admin");
    }catch (err: any) {
      setError(err.response?.data?.error || "Incorrect username or password.");

  setSnackbarOpen(true);
}

  };
  const handleSnackbarClose = (
  event?: React.SyntheticEvent | Event,
  reason?: string
) => {
  if (reason === "clickaway") return;
  setSnackbarOpen(false);
};


  return (
    <Container maxWidth="md"
      sx={{
        minHeight: '100vh',
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "80px", 

    
        justifyContent: "center",
        backgroundColor: "#f6f1f1",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 320, sm: 400, md: 480 },
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => router.push("/")}
          sx={{ position: "absolute", top: 16, left: 16 }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ fontWeight: 500, mb: 3 }}
        >
          Admin Login
        </Typography>
<Snackbar
  open={snackbarOpen}
  onClose={handleSnackbarClose}
  autoHideDuration={3000}
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
  sx={{ mt: 6, width: { xs: "90%", sm: 400 } }}
>
  <Alert
    onClose={handleSnackbarClose}
    severity="error"
    icon={<ErrorIcon sx={{ color: "white" }} />}
    sx={{
      width: "100%",
      bgcolor: "error.dark",
      color: "white",
      fontWeight: "bold",
      boxShadow: 3,
      minHeight: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",

      // Override internal styles
      "& .MuiAlert-message": {
        textAlign: "center",
        width: "100%",
      },
      "& .MuiAlert-icon": {
        marginRight: 0,
        marginLeft: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    }}
  >
    {error}
  </Alert>
</Snackbar>





        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}
