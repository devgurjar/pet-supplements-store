import React from 'react';
import { Box } from '@mui/material';

const Logo = ({ size = 150 }) => {
  const handleImageError = (e) => {
    console.error('Logo image failed to load');
    e.target.src = './assets/images/placeholder.png';
  };

  return (
    <Box
      component="img"
      src="./assets/images/logo.png"
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