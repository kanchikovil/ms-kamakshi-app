// "use client";
// import * as React from "react";
// import Grid from '@mui/material/Unstable_Grid2';

// import { Box, Button, TextField, Typography } from '@mui/material';

// interface RegistrationCardProps {
//     regType: string;
// }

// export const NavratriRegistraionHeader: React.FC<RegistrationCardProps> = ({ regType }) => {
//     return (
//         <Grid container direction="row" spacing={1} sx={{
//             backgroundColor: '#CFC4C4',
//             height: "85px",
//             position: "sticky",
//             top: 0,
//             zIndex: 100
//         }}>
//             <Grid xs={4}>
//              <Grid
//   container
//   direction="row"
//   spacing={1}
//   sx={{
//     backgroundColor: '#F5F3F3',
//     marginLeft: "11%",
//     marginBottom:"2%",
//     height: "100%",
//     width: "90  %",
//     padding: 0,
//     alignItems: "stretch",
//     overflow: "hidden",
//     boxSizing: "border-box"
//   }}
// >


//                     <Grid xs={3} display="flex" direction="row" alignItems="center" justifyContent="center">
//                         <Grid xs={12} sx={{
//                             height: '70px',
//                             width: '70px',
//                             borderRadius: '100%',
//                             backgroundImage: "url('../images/kanya-card-home.png')",
//                             backgroundSize: 'cover'
//                         }}></Grid>
//                     </Grid>
//                     <Grid xs={8} display="flex" direction="row" alignItems="center" justifyContent="flex-start">
//                         <Grid container direction="column" sx={{ gap: '2px', padding: 0, display: 'flex' }}>
//                             <Typography
//                                 fontSize="22px"
//                                 color="#4F4500"
//                                 fontWeight={700}
//                                 sx={{ margin: 0, padding: 0, lineHeight: 1 }}>
//                                 Navarathri Registration
//                             </Typography>

//                             <Grid container direction="row" alignItems="center" sx={{ padding: 0 }}>
//                                 <Typography sx={{
//                                     color: '#4f4500',
//                                     fontSize: '30px',
//                                     fontWeight: 400,
//                                     margin: 0,
//                                     padding: 0
//                                 }}>
//                                     {regType === "kanya" ? "Kanya" : "Suvasini"}
//                                 </Typography>

//                                 <Box component="div" role="separator" sx={{
//                                     backgroundColor: '#716e6e',
//                                     width: "2px",
//                                     height: "24px", /* Reduced height */
//                                     margin: "8px"
//                                 }} />

//                                 <Typography sx={{
//                                     color: '#75762a',
//                                     fontSize: '16px',
//                                     fontWeight: 400,
//                                     margin: 0,
//                                     padding: 0,
//                                     lineHeight: '20px'
//                                 }}>
//                                     {regType === "kanya" ? "Child under age 10" : "Elderly over 40 Years"}
//                                 </Typography>
//                             </Grid>
//                         </Grid>

//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Grid xs={8}>
//                 <Grid container direction="row" spacing={1} alignItems="left" justifyContent="left" alignContent="center">
//                     <Grid xs={4} sx={{
//                         paddingTop: "2%",
//                         marginLeft: "2%"
//                     }}>
//                         <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
//                             <Grid xs={5}>
//                                 <Typography fontSize={'16px'} color={'#3C3C3E'} fontWeight={900} >Validate Aadhar</Typography>
//                             </Grid>
//                             <Grid xs={5}>
//                                 <TextField
//                                     type="number"
//                                     placeholder="Aadhar number"
//                                     style={{
//                                         flexGrow: 1,
//                                         fontWeight: 900,
//                                         backgroundColor: "#fff",
//                                         borderRadius: 0,
//                                         fontSize: '10px',
//                                         fontFamily: 'Arima Madurai, -apple-system, Helvetica, sans-serif'
//                                     }}
//                                     sx={{
//                                         "& fieldset": { border: 'none' },
//                                         borderRadius: 0,
//                                         "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
//                                             display: "none",
//                                         },
//                                         "& input[type=number]": {
//                                             MozAppearance: "textfield",
//                                             padding: '8px'
//                                         },
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid xs={2}>
//                                 <Button type="submit">VALIDATE</Button>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid >
//     );
// };


"use client";
import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';



interface RegistrationCardProps {
    regType: string;
}

export const NavratriRegistraionHeader: React.FC<RegistrationCardProps> = ({ regType }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:1070px)');
    const isSmallMobile = useMediaQuery('(max-width:595px)');

    return (
        <Grid
            container
            spacing={1}
            direction={isMobile ? 'column' : 'row'}
            sx={{
                backgroundColor: '#CFC4C4',
                position: "sticky",
                top: 0,
                zIndex: 100,
                padding: isMobile ? '0.5em' : '0',
            }}
        >
            <Grid xs={12} sm={4}>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    sx={{
                        backgroundColor: '#F5F3F3',
                        marginLeft: isMobile ? '0' : "10%",
                        marginBottom: isMobile ? '0' : "2%",
                        height: isMobile ? 'auto' : "107%",
                        width: isSmallMobile
                            ? "100%"
                            : isMobile
                                ? "310%"
                                : "90.5%",
                        padding: isMobile ? '0.5em' : '0',
                        boxSizing: "border-box",
                        justifyContent: "center"
                    }}
                >
                    <Grid xs={3} display="flex" alignItems="center" justifyContent="left">
                        <Box
                            sx={{
                                height: isSmallMobile ? '90px' : isMobile ? '90px' : '70px',
                                width: isSmallMobile ? '80px' : isMobile ? '90px' : '70px',
                                borderRadius: '100%',
                                backgroundImage: `url('../images/${regType === "kanya" ? "kanya-card-home.png" : "suvashini-card-home.png"}')`,

                                backgroundSize: 'cover',

                            }}
                        />
                    </Grid>

                    <Grid xs={9} display="flex" alignItems="center" justifyContent="center">
                        <Grid container direction="column" sx={{ gap: '2px' }}>
                            <Typography
                                fontSize={isMobile ? "12px" : "22px"}
                                color="#4F4500"
                                fontWeight={700}
                            >
                                Navarathri Registration
                            </Typography>

                            <Grid container alignItems="center">
                                <Typography sx={{
                                    color: '#4f4500',
                                    fontSize: isMobile ? '16px' : '30px',
                                    fontWeight: 400
                                }}>
                                    {regType === "kanya" ? "Kanya" : "Suvasini"}
                                </Typography>

                                <Box
                                    component="div"
                                    role="separator"
                                    sx={{
                                        backgroundColor: '#716e6e',
                                        width: "2px",
                                        height: "24px",
                                        margin: "0 8px"
                                    }}
                                />

                                <Typography sx={{
                                    color: '#75762a',
                                    fontSize: isMobile ? '16px' : '16px',
                                    fontWeight: 400
                                }}>
                                    {regType === "kanya" ? "Child under age 10" : "Elderly over 40 Years"}
                                </Typography>
                            </Grid>

                            {isMobile && (
                                <Grid container spacing={1} mt={1} direction="column" alignItems="center">
                                    <Grid xs={12}>
                                        <Typography
                                            fontSize="14px"
                                            color="#3C3C3E"
                                            fontWeight={900}
                                            align="center"
                                        >
                                            Validate Aadhar & Age
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <TextField
                                            type="number"
                                            placeholder="Aadhar number"
                                            sx={{
                                                backgroundColor: "#fff",
                                                borderRadius: 0,
                                                fontSize: '14px',
                                                maxWidth: '300px',
                                                width: '100%',
                                                "& fieldset": { border: 'none' },
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
                                <Grid xs={8}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        placeholder="Age"
                                        sx={{
                                            backgroundColor: "#fff",
                                            borderRadius: 0,
                                            fontSize: '14px',
                                            "& fieldset": { border: 'none' },
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
                                    <Grid xs={12} sx={{ mt: 1 }}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{ width: '100px', display: 'block', margin: '0 auto' }}
                                        >
                                            VALIDATE
                                        </Button>
                                    </Grid>
                                </Grid>
                            )}


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {!isMobile && (
                <Grid xs={12} sm={8}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        alignItems="end"
                        justifyContent="flex-start"
                        sx={{
                            paddingTop: "2%",
                            marginLeft: "2%",
                        }}
                    >
                        <Grid xs={12} sm={4}>
                            <Typography
                                fontSize="16px"
                                color={'#3C3C3E'}
                                fontWeight={900}
                            >
                                Validate Aadhar&nbsp;&&nbsp;Age
                            </Typography>
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid xs={8}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        placeholder="Aadhar number"
                                        sx={{
                                            backgroundColor: "#fff",
                                            borderRadius: 0,
                                            fontSize: '14px',
                                            "& fieldset": { border: 'none' },
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
                                <Grid xs={8}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        placeholder="Age"
                                        sx={{
                                            backgroundColor: "#fff",
                                            borderRadius: 0,
                                            fontSize: '14px',
                                            "& fieldset": { border: 'none' },
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

                                <Grid xs={4}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="medium"
                                        sx={{ height: '100%' }}
                                    >
                                        VALIDATE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

