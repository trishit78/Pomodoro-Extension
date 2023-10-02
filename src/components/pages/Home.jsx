import { Box, Container, Typography } from "@mui/material"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

const WelcomePage = () => {
  return (
    <Typography>Login To Get Started</Typography>
  )
}

function Home(props) {
  const { isLoggedIn, userName } = props
  
  if(!isLoggedIn){
    return (
      <WelcomePage />
    )
  }

  return (
    <Container>
      <Box>{`Welcome ${userName}`}</Box>
    </Container>
  )
}

export default Home