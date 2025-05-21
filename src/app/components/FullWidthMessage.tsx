// import React from 'react';
// import { Box, Typography } from '@mui/material';

// interface FullWidthMessageProps {
//   message: string;
//   backgroundColor?: string;
//   textColor?: string;
// }

// const FullWidthMessage: React.FC<FullWidthMessageProps> = ({
//   message,
//   backgroundColor = '#CFC4C4', // Default background color
//   textColor = '#4F4500', // Default text color
// }) => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: 50, // Fixed height for the component
//         backgroundColor,
//         display: 'flex',
//         alignItems: 'center',
//         paddingLeft: '3%', // Align text towards the left
//         marginTop: -5, // Overlap with the banner
//       }}
//     >
//       <Typography fontSize={'22px'} color={textColor} fontWeight={700} >
//         {message}
//       </Typography>
//     </Box>
//   );
// };

// export default FullWidthMessage;



import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface FullWidthMessageProps {
  message: string;
  backgroundColor?: string;
  textColor?: string;
}

const FullWidthMessage: React.FC<FullWidthMessageProps> = ({
  message,
  backgroundColor = '#CFC4C4',
  textColor = '#4F4500',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isTablet = useMediaQuery('(max-width: 1024px)');

  const fontSize = isMobile ? '16px' : isTablet ? '18px' : '22px';

  return (
    <Box
      sx={{
        width: isTablet ? '100vw' : '100%',      
        height: isMobile ? 40 : 50,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'flex-start',
        paddingLeft: isMobile ? 0 : '3%',
        marginTop: isMobile ? -2 : -5,
        overflowX: isTablet ? 'auto' : 'visible',
        position: isTablet ? 'relative' : 'static',  
        left: isTablet ? 'calc(-50vw + 50%)' : 'auto',  
      }}
    >
      <Typography
        fontSize={fontSize}
        color={textColor}
        fontWeight={700}
        noWrap
        sx={{
          minWidth: 0,
          whiteSpace: 'nowrap',
          wordBreak: 'keep-all',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default FullWidthMessage;
