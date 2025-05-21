// "use client";

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useLogin } from "../context/LoginContext";

// function LogoImage() {
//     return <Box component={"img"} src="/images/logo.png" alt="Image" width={'auto'} height={15} />;
// }

// export default function Header() {
//     const router = useRouter();
//     const { isLoggedIn, logout } = useLogin();

//     return (
//         <Box>
//             <AppBar position="static">
//                 <Toolbar style={{
//                     backgroundColor: "#642210",
//                     height: "65px",
//                     width: "100%",
//                     backgroundImage: "linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.1)), url('/images/repeat-bg-pattern.jpg')",
//                     backgroundRepeat: "repeat-x",
//                     position: "sticky",
//                     top: 0,
//                     zIndex: 100
//                 }}>
//                     <Box component="div" sx={{ flexGrow: 1, marginLeft: '2%' }}>
//                         <Link href={"/"}>
//                             <LogoImage />
//                         </Link>
//                     </Box>

//                     {isLoggedIn ? (
//                         <Button style={{ textTransform: 'none' }} sx={{ color: "#CDC4C1", fontWeight: 700 }} onClick={() => { logout(); router.push("/pages/login"); }}>
//                             Logout
//                         </Button>
//                     ) : (
//                         <Link href={"/pages/login"}>
//                             <Button style={{ textTransform: 'none' }} sx={{ color: "#CDC4C1", fontWeight: 700 }}>Login</Button>
//                         </Link>
//                     )}
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }



  "use client";

  import * as React from "react";
  import AppBar from "@mui/material/AppBar";
  import Box from "@mui/material/Box";
  import Toolbar from "@mui/material/Toolbar";
  import Button from "@mui/material/Button";
  import IconButton from "@mui/material/IconButton";
  import Link from "next/link";
  import { useRouter } from "next/navigation";
  import { useLogin } from "../context/LoginContext";
  import { useTheme, useMediaQuery } from "@mui/material";
  import HowToRegIcon from "@mui/icons-material/HowToReg";         
  import ExitToAppIcon from "@mui/icons-material/ExitToApp";       

  function LogoImage() {
    return (
      <Box component={"img"} src="/images/logo.png" alt="Image" width={"auto"} height={15} />
    );
  }

  export default function Header() {
    const router = useRouter();
    const { isLoggedIn, logout } = useLogin();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleLogout = () => {
      logout();
      router.push("/pages/login");
    };

    return (
      <Box>
        <AppBar
          position={isMobile ? "fixed" : "static"} 
          sx={{
            top: 0,
            zIndex: 1100,
            backgroundColor: "#642210",
            backgroundImage: "linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.1)), url('/images/repeat-bg-pattern.jpg')",
            backgroundRepeat: "repeat-x",
            height: 65,
          }}
        >
          <Toolbar sx={{ width: "100%", px: 2 }}>
            <Box sx={{ flexGrow: 1, marginLeft: "2%" }}>
              <Link href={"/"}>
    <LogoImage />
  </Link>

            </Box>

          {isLoggedIn ? (
    isMobile ? (
      <IconButton
        onClick={handleLogout}
        sx={{ color: "#CDC4C1" }}
        aria-label="logout"
        size="large"
      >
        <HowToRegIcon />
        
      </IconButton>
    ) : (
      <Button
        onClick={handleLogout}
        sx={{ color: "#CDC4C1", fontWeight: 700, textTransform: "none" }}
      >
        Logout
      </Button>
    )
  ) : isMobile ? (
    <Link href={"/pages/login"}>
      <IconButton sx={{ color: "#CDC4C1" }} aria-label="login" size="large">
        
        <ExitToAppIcon />
      </IconButton>
    </Link>
  ) : (
    <Link href={"/pages/login"}>
      <Button
        sx={{ color: "#CDC4C1", fontWeight: 700, textTransform: "none" }}
      >
        Login
      </Button>
    </Link>
  )}
          </Toolbar>
        </AppBar>

        
        {isMobile && <Box sx={{ height: "65px" }} />}
      </Box>
    );
  }
