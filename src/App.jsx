import "./App.css";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import { DashBoard, Home, Login, Signup } from "./components/pages";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = "anurag";
  const data = { isLoggedIn, redirect, userName };
  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home {...data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;