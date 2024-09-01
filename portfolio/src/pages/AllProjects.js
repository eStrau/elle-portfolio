import React from "react";
import { Box, Typography, Button, Grid2 } from '@mui/material';
import { ProjectData } from '../data/ProjectData';
import ProjectCard from '../components/ProjectCard';

const AllProjects = () => {
    return (
      <div>
        <div>
          <Typography variant="h2" gutterBottom>
              Projects
          </Typography>
        </div>
        <Box sx={{ p: 4, mt: 8 }}>
            <Grid2 container spacing={8} sx={{ mt: 2 }}>
              {ProjectData.map((project, index) => (
                <Grid2 item size={{xs: 10, sm: 4, md: 6}} key={index}>
                  <ProjectCard
                    image={project.image}
                    name={project.name}
                    summary={project.summary}
                    id={index}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
      </div>
      );
};

export default AllProjects;