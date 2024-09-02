import React from 'react'
// useful when associating with specific users and will cause a display for that person
// useParams gets the specific url for the website to go to
import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

import { ProjectData } from '../data/ProjectData';
import backgroundImg from '../images/backgroundImage.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = () => {
  const {id} = useParams()
  const project = ProjectData[id]
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > 
        <Typography variant="h2" gutterBottom>
          {project.name}
        </Typography>
      </Box>
      <Box>
        <Container>
          <Grid2 container spacing={8}>
            <Grid2 size={{xs: 12, md: 8}} >
              <Box sx={{alignItems: 'center'}}>
                <img src={project.image} style={{height: '80%', width: '80%'}}/>
              <Box>
                {project.details}
              </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 2}}>
              <Box sx={{ height: '40vh', width: '20vw' }}>
                <Typography>
                  Project Info
                </Typography>
                <Typography>
                  Language(s)
                  <br/>
                  {project.lang}
                </Typography>
                <Typography>
                  Tools / Libraries / Software
                </Typography>
                <Typography>
                  Created On
                </Typography>
                <Typography>
                  Completed On
                </Typography>
              </Box>
              <Box>
                <Button onClick={() => window.open(project.github)}>
                  View Project
                </Button>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 6}}>
            My Role & Responsibilities
            </Grid2>
            <Grid2 size={{xs: 12, md: 6}}>
              My Takeaways
            </Grid2>
          </Grid2>
          
        </Container>
        
      </Box>
      <GitHubIcon className='icons' onClick={() => window.open(project.github)}/>
    </div>
  )
}

export default Project