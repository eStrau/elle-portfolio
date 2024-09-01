import React, { useState } from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import backgroundImg from '../images/backgroundImage.jpg';

// Typing animation keyframes
const typing = keyframes`
  from { width: 0; }
  to { width: 50%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: black; }
`;

const TypingText = ({ text }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        display: 'inline-block',
        overflow: 'hidden',
        borderRight: '0.15em solid black',
        whiteSpace: 'nowrap',
        margin: '0 auto',
        letterSpacing: '0.15em',
        animation: `${typing} 4s steps(40, end), ${blinkCaret} 0.75s step-end infinite`,
      }}
    >
      {text}
    </Typography>
  );
};

const Home = () => {
  return (
    <div>
        {/* Image Background with Typing Text */}
        <Box
            sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <TypingText text="Hi, my name is Elle" />
        </Box>
        {/* Solid Background Section with Text and Image */}
        <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    <Grid2 size={{xs: 12, md: 8}}>
                        <Typography variant="h4" gutterBottom>
                        About Elle
                        </Typography>
                        <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </Typography>
                        <Typography variant="body1">
                        Next Paragraph
                        </Typography>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4}}>
                        <img
                        src=""
                        alt="Description"
                        style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    </div>
  )
}

export default Home