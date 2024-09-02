import React from 'react';
import { Box, Typography, Button, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProjectData } from '../data/ProjectData2';
import backgroundImg from '../images/backgroundImage.jpg';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const navigate = useNavigate();
    const featured = ProjectData.slice(0, 4);
    
    return (
      <div>
        <Box
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '30vh',
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ justifyContent: 'center'}}>
              <Typography variant="h2" gutterBottom>
                  Projects
              </Typography>
            </Box>
        </Box>
        <Box sx={{paddingLeft: 4, paddingRight: 4, paddingTop: 1, paddingBottom: 2}}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90vw', paddingBottom: 3}}>
            <Typography variant="h4">
              Featured Projects
            </Typography>
            <Button variant="contained" color="primary" onClick={() => {navigate("/elle-portfolio/AllProjects")}}>
              View All
            </Button>
          </Box>
          <Grid2 container spacing={6}>
            {featured.map((project, index) => (
              <Grid2 item size={{xs: 10, sm: 4, md: 6}} key={index}>
                <ProjectCard
                  image={project.images[0]}
                  name={project.name}
                  summary={project.projectOverview}
                  id={index}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </div>
    );
}

export default Projects