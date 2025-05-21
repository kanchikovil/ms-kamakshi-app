// import React from 'react';
// import { Box } from '@mui/material';
// import BannerImage from '../../../public/images/banner-image.png';

// interface BannerProps {
//   backgroundColor?: string;
//   imageUrl?: string; // Image URL remains
// }

// const Banner: React.FC<BannerProps> = () => {
//   return (
//     <Box
//     component={'img'}
//       sx={{
//         width: '100%',
//         height: 250, // Set a fixed height for the banner
//         backgroundColor : '#F6F1F1',
//         backgroundImage: `url(${BannerImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         marginTop:-1
//       }}
//       src={'../images/banner-image.png'}
//     />
//   );
// };

// export default Banner;




import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import BannerImage from '../../../public/images/banner-image.png';

const Banner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 const isTablet = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isSpecificWidth = useMediaQuery('(max-width: 1020px) and (min-width: 1000px)');

 if (isMobile || isTablet || isSpecificWidth) {
  return (
    <Box
      sx={{
        width: '100vw', 
        position: 'relative',
        left: '50%',
        right: '50%',
        height:250,
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <Box
        component="img"
        src={BannerImage.src}
        alt="Banner"
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit:'cover', 
          
          mt: -1,
        }}
      />
    </Box>
  );
}

  return (
    <Box
      sx={{
        width: '100%',
        height: 250,
        backgroundColor: '#F6F1F1',
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: -1,
      }}
    />
  );
};

export default Banner;
