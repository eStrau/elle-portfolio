import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const ImageCarousel = ({ images, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle manual image navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle automatic image slideshow
  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      return () => clearInterval(intervalId);
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '400px', // Adjust as needed
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          borderRadius: 8 
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '16px', 
          transform: 'translateY(-50%)' 
        }}
      >
        <IconButton onClick={goToPrevious}>
          <ArrowBackIos />
        </IconButton>
      </Box>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          right: '16px', 
          transform: 'translateY(-50%)' 
        }}
      >
        <IconButton onClick={goToNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageCarousel;