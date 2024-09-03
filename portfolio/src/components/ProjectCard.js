import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ id, image, name, summary, languages, tools }) => {
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
              height: '100%',
              padding: 2,
              boxSizing: 'border-box',
              overflow: 'hidden',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" component="p">
              {summary}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', paddingTop: 1 }}>
              {languages.map((lang, index) => <Chip key={index} label={lang} color='primary' sx={{ margin: 0.5 }}/>)}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {tools.map((tool, index) => <Chip key={index} label={tool} color='primary' sx={{ margin: 0.5 }}/>)}
            </Box>
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