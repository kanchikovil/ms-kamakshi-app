"use client";
import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2';

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
            <Grid xs={4}>
             <Grid
  container
  direction="row"
  spacing={1}
  sx={{
    backgroundColor: '#F5F3F3',
    marginLeft: "11%",
    marginBottom:"2%",
    height: "100%",
    width: "90  %",
    padding: 0,
    alignItems: "stretch",
    overflow: "hidden",
    boxSizing: "border-box"
  }}
>


                    <Grid xs={3} display="flex" direction="row" alignItems="center" justifyContent="center">
                        <Grid xs={12} sx={{
                            height: '70px',
                            width: '70px',
                            borderRadius: '100%',
                            backgroundImage: "url('../images/kanya-card-home.png')",
                            backgroundSize: 'cover'
                        }}></Grid>
                    </Grid>
                    <Grid xs={8} display="flex" direction="row" alignItems="center" justifyContent="flex-start">
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
                                    {regType === "kanya" ? "Kanya" : "Suvasini"}
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
            <Grid xs={8}>
                <Grid container direction="row" spacing={1} alignItems="left" justifyContent="left" alignContent="center">
                    <Grid xs={4} sx={{
                        paddingTop: "2%",
                        marginLeft: "2%"
                    }}>
                        <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
                            <Grid xs={5}>
                                <Typography fontSize={'16px'} color={'#3C3C3E'} fontWeight={900} >Validate Aadhar</Typography>
                            </Grid>
                            <Grid xs={5}>
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
                            <Grid xs={2}>
                                <Button type="submit">VALIDATE</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

// "use client";
// import * as React from "react";
// import Grid from '@mui/material/Unstable_Grid2';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   Drawer,
//   IconButton
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// interface RegistrationCardProps {
//   regType: string;
// }

// export const NavratriRegistraionHeader: React.FC<RegistrationCardProps> = ({ regType }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Grid container direction="row" spacing={1} sx={{
//       backgroundColor: '#CFC4C4',
//       height: "120px",
//       position: "sticky",
//       top: 0,
//       zIndex: 100,
//       paddingX: 2
//     }}>
//       {isMobile ? (
//         <>
//           {/* ✅ Mobile View */}
//           <Grid xs={12} display="flex" justifyContent="space-between" alignItems="center">
//             <Typography fontSize="18px" fontWeight={700}>Navarathri</Typography>
//             <IconButton onClick={toggleDrawer} size="large">
//               <MenuIcon />
//             </IconButton>
//           </Grid>

//           <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
//             <Box sx={{ width: 280, padding: 2 }}>
//               <Typography variant="h6" fontWeight={700}>Navarathri Registration</Typography>
//               <Typography variant="body1" mt={1}>
//                 {regType === "kanya" ? "Kanya - Child under age 10" : "Suvasini - Elderly over 40 Years"}
//               </Typography>

//               <Box mt={2}>
//                 <Typography fontWeight={900} color="#3C3C3E">Validate Aadhar</Typography>
//                 <TextField
//                   fullWidth
//                   type="number"
//                   placeholder="Aadhar number"
//                   sx={{
//                     backgroundColor: "#fff",
//                     mt: 1,
//                     "& fieldset": { border: 'none' },
//                     "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
//                       display: "none",
//                     },
//                     "& input[type=number]": {
//                       MozAppearance: "textfield",
//                       padding: '8px'
//                     },
//                   }}
//                 />
//                 <Button fullWidth sx={{ mt: 1 }} variant="contained">VALIDATE</Button>
//               </Box>
//             </Box>
//           </Drawer>
//         </>
//       ) : (
//         <>
//           {/* ✅ Desktop View (Original) */}
//           <Grid xs={4}>
//             <Grid
//               container
//               direction="row"
//               spacing={1}
//               sx={{
//                 backgroundColor: '#F5F3F3',
//                 marginLeft:"8%",
               
//                 marginBottom: "2%",
//                 height: "80%",
//                 width: "95%",
//                 padding: 0,
//                 alignItems: "stretch",
//                 overflow: "hidden",
//                 boxSizing: "border-box"
//               }}
//             >
//               <Grid xs={3} display="flex" direction="row" alignItems="center" justifyContent="center">
//                 <Grid xs={12} sx={{
//                   height: '70px',
//                   width: '70px',
//                   borderRadius: '100%',
//                   backgroundImage: "url('../images/kanya-card-home.png')",
//                   backgroundSize: 'cover'
//                 }}></Grid>
//               </Grid>
//               <Grid xs={8} display="flex" direction="row" alignItems="center" justifyContent="flex-start">
//                 <Grid container direction="column" sx={{ gap: '2px', padding: 0, display: 'flex' }}>
//                   <Typography
//                     fontSize="22px"
//                     color="#4F4500"
//                     fontWeight={700}
//                     sx={{ margin: 0, padding: 0, lineHeight: 1 }}>
//                     Navarathri Registration
//                   </Typography>

//                   <Grid container direction="row" alignItems="center" sx={{ padding: 0 }}>
//                     <Typography sx={{
//                       color: '#4f4500',
//                       fontSize: '30px',
//                       fontWeight: 400,
//                       margin: 0,
//                       padding: 0
//                     }}>
//                       {regType === "kanya" ? "Kanya" : "Suvasini"}
//                     </Typography>

//                     <Box component="div" role="separator" sx={{
//                       backgroundColor: '#716e6e',
//                       width: "2px",
//                       height: "24px",
//                       margin: "8px"
//                     }} />

//                     <Typography sx={{
//                       color: '#75762a',
//                       fontSize: '16px',
//                       fontWeight: 400,
//                       margin: 0,
//                       padding: 0,
//                       lineHeight: '20px'
//                     }}>
//                       {regType === "kanya" ? "Child under age 10" : "Elderly over 40 Years"}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>

//           <Grid xs={8}>
//             <Grid container direction="row" spacing={1} alignItems="left" justifyContent="left" alignContent="center">
//               <Grid xs={4} sx={{
//                 paddingTop: "2%",
//                 marginLeft: "2%"
//               }}>
//                 <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
//                   <Grid xs={5}>
//                     <Typography fontSize={'16px'} color={'#3C3C3E'} fontWeight={900} >Validate Aadhar</Typography>
//                   </Grid>
//                   <Grid xs={5}>
//                     <TextField
//                       type="number"
//                       placeholder="Aadhar number"
//                       style={{
//                         flexGrow: 1,
//                         fontWeight: 900,
//                         backgroundColor: "#fff",
//                         borderRadius: 0,
//                         fontSize: '10px',
//                         fontFamily: 'Arima Madurai, -apple-system, Helvetica, sans-serif'
//                       }}
//                       sx={{
//                         "& fieldset": { border: 'none' },
//                         borderRadius: 0,
//                         "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
//                           display: "none",
//                         },
//                         "& input[type=number]": {
//                           MozAppearance: "textfield",
//                           padding: '8px'
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={2}>
//                     <Button type="submit">VALIDATE</Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </>
//       )}
//     </Grid>
//   );
// };
