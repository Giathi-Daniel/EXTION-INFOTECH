import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar>
        <IconButton edge="start" className="mr-2" color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className="flex-grow">
          My E-commerce
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Shop</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
