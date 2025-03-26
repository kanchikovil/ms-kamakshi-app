import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#CFC4C4',
        color: 'white',
        textAlign: 'left',
        paddingLeft: '3%',
        py: 2,
        zIndex: 100
      }}
    >
      <Typography variant="body2" color='#353434'>
        © {new Date().getFullYear()}, Manasasmarami Kamakshi
      </Typography>
    </Box>
  );
};

export default Footer;
