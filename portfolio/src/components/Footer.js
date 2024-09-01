import React from 'react';
import { Box, Container, Grid2 } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div>
        <Box sx={{alignItems: 'center', justifyContent: 'center'}}>
            <Container>
                <Grid2 container spacing={6} alignItems="center" justifyContent='center'>
                    <LinkedInIcon onClick={() => window.open('https://linkedin.com/in/ellestrauss')}/>
                    <GitHubIcon onClick={() => window.open('https://github.com/eStrau')}/>
                    <EmailIcon onClick={() => window.location = 'mailto:strausselle01@gmail.com'}/>
                </Grid2>
                <Box sx={{alignItems: 'center', justifyContent: 'center', fontSize: '16px'}}>
                    © 2023 Elle Strauss
                </Box>
            </Container>
        </Box>
    </div>
  )
}

export default Footer