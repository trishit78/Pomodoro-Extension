import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
    <div className="navbar">
      <IconButton edge="start" color="inherit" onClick={handleClickLogin}>
         <AccountCircleOutlinedIcon fontSize="large"/>
      </IconButton>
      <Typography sx={{ marginRight: '5px' }}>{isLoggedIn ? "Logout" : "Login"} </Typography>

      {/* <button onClick={redirectToSpotify}>Go to Spotify</button> */}

     
    
    </div>
  );
}

export default Navbar;