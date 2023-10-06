import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
         <AccountCircleIcon fontSize="large"/>
      </IconButton>
      <Typography sx={{ marginRight: '5px' }}>{isLoggedIn ? "Logout" : "Login"} </Typography>
    </div>
  );
}

export default Navbar;