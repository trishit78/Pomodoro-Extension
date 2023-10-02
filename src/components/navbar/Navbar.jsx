import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
    const navigate = useNavigate()
    const handleClickLogin = () => {
        !isLoggedIn ? navigate('/login') : navigate('/')
    }
  return (
    <AppBar position='sticky'>
        <Toolbar>
            <Box>
                <IconButton
                edge="start"
                color="inherit"
                    onClick={handleClickLogin}
                >
                    <AccountCircleIcon />
                    <p>{isLoggedIn ? 'Logout' : 'Login' } </p>
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar