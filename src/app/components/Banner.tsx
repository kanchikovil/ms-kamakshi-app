import React from 'react';
import { Box } from '@mui/material';
import BannerImage from '../../../public/images/banner-image.png';

interface BannerProps {
  backgroundColor?: string;
  imageUrl?: string; // Image URL remains
}

const Banner: React.FC<BannerProps> = () => {
  return (
    <Box
    component={'img'}
      sx={{
        width: '100%',
        height: 250, // Set a fixed height for the banner
        backgroundColor : '#F6F1F1',
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop:-1
      }}
      src={'../images/banner-image.png'}
    />
  );
};

export default Banner;
