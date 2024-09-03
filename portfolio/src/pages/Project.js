import React from 'react'
// useful when associating with specific users and will cause a display for that person
// useParams gets the specific url for the website to go to
import { Box, Button, Container, Grid2, Typography, Chip, IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

import { ProjectData } from '../data/ProjectData2';
import backgroundImg from '../images/backgroundImage.jpg';

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
            Projects
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
          <IconButton onClick={() => navigate('/elle-portfolio/allprojects')}>
            <ArrowBackIos />
            <Typography>
              All Projects
            </Typography>
          </IconButton>
        </Box>
      </Box>
      {/* PROJECT INFORMATION & DETAILS */}
      <Box sx={{padding: 2, backgroundColor: '#F5F3EE'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h3" gutterBottom>
            {project.name}
          </Typography>
        </Box>
        <Container>
          <Grid2 container spacing={8}>
            <Grid2 size={{xs: 12, md: 8}} >
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <ImageCarousel images={project.images} autoPlayInterval={15000}/>
                <Box sx={{textAlign: 'center', paddingTop: 4}}>
                  {project.description}
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ backgroundColor: '#B88E99', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <Typography sx={{ textAlign: 'center', fontSize: 20, color: 'white', paddingBottom: 1 }}>
                      Project Info
                </Typography>
                <Box sx={{ backgroundColor: '#040926', color: 'white'}}>
                  <Box sx={{padding: 1}}>
                    <Typography sx={{fontSize: 18}}>
                      Language(s):
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {project.languages.map((lang, index) => <Chip key={index} label={lang} color='primary' sx={{ margin: 0.5 }}/>)}
                    </Box>
                  </Box>
                  <Box sx={{padding: 1}}>
                    <Typography sx={{fontSize: 18}}>
                      Tools, Libraries, and Softwares:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {project.toolLibraries.map((tool, index) => <Chip key={index} label={tool} color='primary' sx={{ margin: 0.5 }}/>)}
                    </Box>
                  </Box>
                  <Box sx={{padding: 1}}>
                    <Typography sx={{fontSize: 18}}>
                      Created On:
                    </Typography>
                    <Typography>
                      {project.dateCreated}
                    </Typography>
                  </Box>
                  <Box sx={{padding: 1}}>
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