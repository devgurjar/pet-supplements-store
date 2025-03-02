import React from 'react';
import { Box } from '@mui/material';

const Logo = ({ size = 150 }) => {
  console.log('Logo path:', `${process.env.PUBLIC_URL}/assets/images/logo.png`);
  const handleImageError = (e) => {
    console.error('Logo image failed to load');
    e.target.src = `${process.env.PUBLIC_URL}/assets/images/placeholder.png`;
  };

  return (
    <Box
      component="img"
      src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
      alt="Pet Supplements Store Logo"
      onError={handleImageError}
      sx={{
        width: size,
        height: 'auto',
        display: 'block',
        margin: '0 auto'
      }}
    />
  );
};

export default Logo; 