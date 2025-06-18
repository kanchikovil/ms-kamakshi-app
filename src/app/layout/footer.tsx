import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#CFC4C4',
        color: '#353434',
        textAlign: 'left',
        paddingLeft: '3%',
        py: 2,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()}, Manasasmarami Kamakshi
      </Typography>
    </Box>
  );
};


export default Footer;
