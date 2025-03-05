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
import { Divider, Stack } from '@mui/material';


function LogoImage() {
    return <Box component={"img"} src="/images/swami.png" alt="Image" width={35} height={35} />;
}

export default function Header() {

    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{
                height: '10vh', backgroundColor: '#EEEEFF', display: 'flex',
                alignContent: 'center', justifyContent: 'center', flexWrap: 'wrap'
            }}>
                <Stack justifyContent={'center'} alignContent={'center'} display={'flex'}>
                    <Typography variant="h3" color='#0F0359'>
                        SRI&nbsp;KAMAKSHI&nbsp;AMBAL&nbsp;DEVASTHANAM
                    </Typography>
                    <Typography variant="body1" color='#0F0359'>
                        KANCHIPURAM
                    </Typography>
                </Stack>

            </Box>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#0F0359", minHeight: '0.5vh', height: '6vh' }}>
                    <Link href={'/'}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, color: 'white' }}
                        >
                            <LogoImage />
                        </IconButton>
                    </Link>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        ManasasmaramiKamakshi
                    </Typography>
                    <Link href={'/'} color='white'>
                        <Button variant="text" sx={{ color: 'white' }}>
                            <Typography variant="button" fontWeight={'bold'} component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Button>
                    </Link>
                    <Link href={'/pages/kanya-registration'} color='white'>
                        <Button variant="text" sx={{ color: 'white' }}>
                            <Typography variant="button" fontWeight={'bold'} component="div" sx={{ flexGrow: 1 }}>
                                Registration
                            </Typography>
                        </Button>
                    </Link>
                    <Link href={'/admin'} color='white'>
                        <Button variant="text" sx={{ color: 'white' }}>
                            <Typography variant="button" fontWeight={'bold'} component="div" sx={{ flexGrow: 1 }}>
                                Admin Login
                            </Typography>
                        </Button>
                    </Link>
                </Toolbar>
                <Divider orientation="horizontal" flexItem sx={{
                    borderBlockWidth: 2, borderColor: 'white'
                }} />
            </AppBar>
        </Box>
    );
}