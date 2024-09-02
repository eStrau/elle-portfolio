import React from 'react'
// useful when associating with specific users and will cause a display for that person
// useParams gets the specific url for the website to go to
import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

import { ProjectData } from '../data/ProjectData2';
import backgroundImg from '../images/backgroundImage.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = () => {
  // constant variables
  const {id} = useParams()
  const project = ProjectData[id]
  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center'
        }}
      > 
        <Box sx={{paddingTop: 8, textAlign: 'center'}}>
          <Typography variant="h3" gutterBottom>
            {project.name}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: 1 }}>
          <Button variant="contained" sx={{ fontSize: 10 }} onClick={() => {navigate("/elle-portfolio/AllProjects")}}>
            Back to All Projects
          </Button>
        </Box>
        
      </Box>
      <Box sx={{padding: 2, backgroundColor: '#F5F3EE'}}>
        <Container>
          <Grid2 container spacing={8}>
            <Grid2 size={{xs: 12, md: 8}} >
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img src={project.images[1]} style={{height: '80%', width: '80%', justifyItems: 'center', display: 'flex'}}/>
                <Box sx={{textAlign: 'center', paddingTop: 4}}>
                  {project.description}
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}}>
              <Box sx={{backgroundColor: '#B88E99', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                      Project Info
                </Typography>
                <Box sx={{ backgroundColor: '#040926', color: 'white'}}>
                  <Box sx={{padding: 2}}>
                    <Typography sx={{fontSize: 18}}>
                      Language(s):
                    </Typography>
                    <Typography>
                      {project.languages}
                    </Typography>
                    <Typography sx={{fontSize: 18}}>
                      Tools / Libraries / Software:
                    </Typography>
                    <Typography>
                      {project.toolLibraries}
                    </Typography>
                    <Typography sx={{fontSize: 18}}>
                      Created On:
                    </Typography>
                    <Typography>
                      {project.dateCreated}
                    </Typography>
                    <Typography sx={{fontSize: 18}}>
                      Completed On:
                    </Typography>
                    <Typography>
                      {project.dateCompleted}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                    <Button variant="contained" onClick={() => window.open(project.linkTo)}>
                      View Project
                    </Button>
                  </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 6}}>
              <Typography sx={{fontSize: 20}}>
                My Role & Responsibilities
              </Typography>
              <Typography>
                {project.role}
              </Typography>
            </Grid2>
            <Grid2 size={{xs: 12, md: 6}}>
              <Typography sx={{fontSize: 20}}>
                My Takeaways
              </Typography>
              <Typography>
                {project.takeaways}
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  )
}

export default Project