import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css'

function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    !isLoggedIn ? navigate("/login") : navigate("/");
  };


  
  return (
    <div>
      <div className="home">
        <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
          <HomeOutlinedIcon fontSize="large"/>
        </IconButton>
      </div>
      <div className="dashboard">
        <IconButton edge="start" color="inherit" onClick={() => navigate('/dashboard')}>
          <TimerOutlinedIcon fontSize="large"/>
        </IconButton>
      </div>
    <div className="navbar">
      <IconButton edge="start" color="inherit" onClick={handleClickLogin}>
         <AccountCircleOutlinedIcon fontSize="large"/>
      </IconButton>
      <Typography sx={{ marginRight: '5px' }}>{isLoggedIn ? "Logout" : "Login"} </Typography>
    </div>
    </div>
  );
}

export default Navbar;