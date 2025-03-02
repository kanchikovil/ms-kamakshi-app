import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function LogoImage() {
    return <Box component={"img"} src="/images/swami.png" alt="Image" width={35} height={35}/>;
 }

export default function Header() {

    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#0F0359 " }}>
                    <Link href={'/'}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, color:'white' }}
                        >
                            <LogoImage />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Manasasmarami Kamakshi
                    </Typography>
                    {/* <Link href={'/pages/registration'}>
                        <Button variant="outlined" color="success">User Login</Button>&nbsp;
                    </Link> */}
                    <Link href={'/admin'} color='white'>
                        <Button variant="outlined" sx={{color:'white'}}>Admin Login</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}