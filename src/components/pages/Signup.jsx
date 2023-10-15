import React, { useRef,useState } from "react"
//import { useAuth } from "../../contexts/AuthContext"
import './login.css'
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup() {
const [formData, setFormData] = useState({
  email: '',
  password: '',
  confirmPassword: ''
})
//    const { signup } = useAuth()
 const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
 const navigate = useNavigate()


 async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
     // history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <>
    <Container className="loginBox" sx={{ width: "250px" }}>
        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="filled"
              inputProps={{
                style: {
                  height: "15px",
                },
              }}
              onChange={handleChange}
              value={formData.email}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="filled"
              inputProps={{
                style: {
                  height: "15px",
                },
              }}
              onChange={handleChange}
              value={formData.password}
              required
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="filled"
              inputProps={{
                style: {
                  height: "15px",
                },
              }}
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
            <Button
              disabled={loading}
              variant="contained"
              color="success"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </Box>
        <Box sx={{}}>
          Already have an account?{" "}
          <Button variant="text" onClick={() => navigate("/login")}>
            Log In
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Signup

// import React from 'react'

// function Signup() {
//   return (
//     <div>
//       Signup
//     </div>
//   )
// }

// export default Signup
