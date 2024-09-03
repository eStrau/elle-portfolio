import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ id, image, name, summary }) => {
    const navigate = useNavigate();
    
    return (
      <Card
        sx={{
          maxWidth: '45vw',
          '&:hover .MuiCardContent-root': {
            display: 'block',
          },
        }}
      >
        <CardActionArea onClick={() => {navigate("/elle-portfolio/project/" + id)}}>
          <CardMedia
            component="img"
            height="200px"
            image={image}
            alt={name}
          />
          <CardContent
            sx={{
              display: 'none',
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              width: '100%',
            }}
          >
            <Typography variant="body2" component="p">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default ProjectCard;