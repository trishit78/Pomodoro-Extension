import React, { useState } from "react";
//import { useAuth } from "../../contexts/AuthContext"

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //const { login } = useAuth()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef);
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push("/")
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Container className="loginBox" sx={{ width: "250px" }}>
        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
            Log In
          </Typography>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
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
            <Button
              disabled={loading}
              variant="contained"
              color="success"
              type="submit"
            >
              Log In
            </Button>
          </form>
        </Box>
        <Box sx={{}}>
          Need an account?{" "}
          <Button variant="text" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
        </Box>
      </Container>
    </>
  );
}












