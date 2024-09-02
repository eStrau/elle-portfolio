import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImg from '../images/backgroundImage.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div>
        <Box sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '15vh',
            display: 'flex',
            flexDirection: 'column', // Stack items vertically
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '50px'
        }}>
            <Container>
                <Grid2 container spacing={6} alignItems="center" justifyContent='center'>
                    <LinkedInIcon onClick={() => window.open('https://linkedin.com/in/ellestrauss')} fontSize='50px'/>
                    <GitHubIcon onClick={() => window.open('https://github.com/eStrau')} fontSize='50px'/>
                    <EmailIcon onClick={() => window.location = 'mailto:strausselle01@gmail.com'} fontSize='50px'/>
                </Grid2>
            </Container>
            <Box sx={{alignItems: 'center', justifyContent: 'center', fontSize: '16px', paddingTop: '10px'}}>
                <Typography sx={{textAlign: 'center'}}>
                    © 2024 Elle Strauss
                </Typography>
            </Box>
        </Box>
    </div>
  )
}

export default Footer