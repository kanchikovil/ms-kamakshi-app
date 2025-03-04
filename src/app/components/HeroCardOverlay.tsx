import React from "react";
import { Stack, Card, CardMedia, Typography, Button } from "@mui/material";
import Link from "next/link";

const HeroCardOverlay: React.FC<any> = (props) => {
    return (
        <Card sx={{ opacity: '75%', position: "relative" }}>
            {/* <div style={{ position: "relative" }}> */}
            <CardMedia style={{ height: "500px", width: '80vw', paddingTop: "0%" }}
                component="img"
                image={props.image} title="Image" alt="Swami Image" />
            <Stack direction={'column'} spacing={2}>
                <Typography variant="h2" sx={{ position: 'absolute', color: 'white', top: "10%", left: "15%", transform: "translateX(-15%)" }}>
                    Krodhi Nama Samvastra
                </Typography>
                <Typography variant="h2" sx={{ position: 'absolute', color: 'white', top: "20%", left: "25%", transform: "translateX(-25%)" }}>
                    Sharadha Namavaratri Mahotsavam
                </Typography>
                <Typography variant="h2" sx={{ position: 'absolute', color: 'white', top: "35%", left: "35%", transform: "translateX(-35%)" }}>
                    {props.year}
                </Typography>
                <Link href={'/pages/kanya-registration'} color='white'>
                <Button variant="contained" sx={{ borderRadius:5, position: 'absolute', bottom: "35%", right: "5%", transform: "translateX(-35%)" }}>
                    <Typography variant="h4">
                        Register
                    </Typography>
                </Button>
                </Link>
            </Stack>
        </Card>
    )
};
export default HeroCardOverlay;