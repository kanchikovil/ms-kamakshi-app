import React from 'react';
import { Box, Typography } from '@mui/material';

interface FullWidthMessageProps {
  message: string;
  backgroundColor?: string;
  textColor?: string;
}

const FullWidthMessage: React.FC<FullWidthMessageProps> = ({
  message,
  backgroundColor = '#CFC4C4', // Default background color
  textColor = '#4F4500', // Default text color
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 50, // Fixed height for the component
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '3%', // Align text towards the left
        marginTop: -5, // Overlap with the banner
      }}
    >
      <Typography fontSize={'22px'} color={textColor} fontWeight={700} >
        {message}
      </Typography>
    </Box>
  );
};

export default FullWidthMessage;
