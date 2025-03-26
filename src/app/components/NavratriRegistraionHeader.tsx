"use client";
import * as React from "react";
import Grid from '@mui/material/Grid2';
import { Box, Button, TextField, Typography } from '@mui/material';

interface RegistrationCardProps {
    regType: string;
}

export const NavratriRegistraionHeader: React.FC<RegistrationCardProps> = ({ regType }) => {
    return (
        <Grid container direction="row" spacing={1} sx={{
            backgroundColor: '#CFC4C4',
            height: "85px",
            position: "sticky",
            top: 0,
            zIndex: 100
        }}>
            <Grid size={{ xs: 4 }}>
                <Grid container direction="row" spacing={1} sx={{
                    backgroundColor: '#F5F3F3',
                    marginLeft: "10%",
                    height: "100%"
                }}>
                    <Grid size={{ xs: 3 }} display="flex" direction="row" alignItems="center" justifyContent="center">
                        <Grid size={12} sx={{
                            height: '70px',
                            width: '70px',
                            borderRadius: '100%',
                            backgroundImage: "url('../images/kanya-card-home.png')",
                            backgroundSize: 'cover'
                        }}></Grid>
                    </Grid>
                    <Grid size={{ xs: 8 }} display="flex" direction="row" alignItems="center" justifyContent="flex-start">
                        <Grid container direction="column" sx={{ gap: '2px', padding: 0, display: 'flex' }}>
                            <Typography
                                fontSize="22px"
                                color="#4F4500"
                                fontWeight={700}
                                sx={{ margin: 0, padding: 0, lineHeight: 1 }}>
                                Navarathri Registration
                            </Typography>

                            <Grid container direction="row" alignItems="center" sx={{ padding: 0 }}>
                                <Typography sx={{
                                    color: '#4f4500',
                                    fontSize: '30px',
                                    fontWeight: 400,
                                    margin: 0,
                                    padding: 0
                                }}>
                                    {regType === "kanya" ? "Kanya" : "Suvahini"}
                                </Typography>

                                <Box component="div" role="separator" sx={{
                                    backgroundColor: '#716e6e',
                                    width: "2px",
                                    height: "24px", /* Reduced height */
                                    margin: "8px"
                                }} />

                                <Typography sx={{
                                    color: '#75762a',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    margin: 0,
                                    padding: 0,
                                    lineHeight: '20px'
                                }}>
                                    {regType === "kanya" ? "Child under age 10" : "Elderly over 40 Years"}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Grid size={{ xs: 8 }}>
                <Grid container direction="row" spacing={1} alignItems="left" justifyContent="left" alignContent="center">
                    <Grid size={{ xs: 4 }} sx={{
                        paddingTop: "2%",
                        marginLeft: "2%"
                    }}>
                        <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
                            <Grid size={{ xs: 5 }}>
                                <Typography fontSize={'16px'} color={'#3C3C3E'} fontWeight={900} >Validate Aadhar</Typography>
                            </Grid>
                            <Grid size={{ xs: 5 }}>
                                <TextField
                                    type="number"
                                    placeholder="Aadhar number"
                                    style={{
                                        flexGrow: 1,
                                        fontWeight: 900,
                                        backgroundColor: "#fff",
                                        borderRadius: 0,
                                        fontSize: '10px',
                                        fontFamily: 'Arima Madurai, -apple-system, Helvetica, sans-serif'
                                    }}
                                    sx={{
                                        "& fieldset": { border: 'none' },
                                        borderRadius: 0,
                                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                            display: "none",
                                        },
                                        "& input[type=number]": {
                                            MozAppearance: "textfield",
                                            padding: '8px'
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 2 }}>
                                <Button type="submit">VALIDATE</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};
