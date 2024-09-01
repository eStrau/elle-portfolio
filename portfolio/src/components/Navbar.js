import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography, Collapse } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import monogram from '../images/monogram.png';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleLogoClick = () => {
      setOpen(!open); // Toggle the visibility of the navbar items
    };
  
    return (
      <Box>
        <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex'}}>
            <IconButton dge="start" color="inherit" aria-label="menu" onClick={handleLogoClick} sx={{ marginRight: 'auto' }}>
              <img src={monogram} alt="Logo" style={{ width: '60px', height: '60px' }} />
            </IconButton>
            <Collapse in={open} sx={{ flexGrow: 1, height: '60px'}}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography variant="h6">Home</Typography>
                  </Link>
                  <Link to="/elle-portfolio/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography variant="h6">Projects</Typography>
                  </Link>
                  <Link to="/elle-portfolio/experience" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography variant="h6">Experience</Typography>
                  </Link>
              </Box>
             </Collapse>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar