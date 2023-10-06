import { Box, Container, Typography } from "@mui/material"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import { BrowserRouter as Router, Route } from "react-router-dom"


const WelcomePage = () => {
  return (
    <Typography>Login To Get Started</Typography>
  )
}

function Home(props) {
  const { isLoggedIn, userName } = props
  
  if(!isLoggedIn){
    return (
      // <>
      // <Router>
      //     {/* <AuthProvider> */}
      //       {/* <Switch> */}
      //         <Route exact path="/" component={WelcomePage} />
      //         {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
      //         <Route path="/signup" component={Signup} />
      //         <Route path="/login" component={Login} />
      //         {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
      //       {/* </Switch> */}
      //     {/* </AuthProvider> */}
      //   </Router>
      // </>
      WelcomePage
      // <Signup />
    )
  }

  return (
    <Container>
      <Box>{`Welcome ${userName}`}</Box>
    </Container>
  )
}

export default Home