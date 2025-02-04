import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Header() {

    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Manasasmarami Kamakshi
                    </Typography>
                    <Link href={'/'}>
                        <Button variant="outlined" color="success">User Login</Button>&nbsp;
                    </Link>
                    <Link href={'/admin'}>
                        <Button variant="outlined" color="error">Admin Login</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}