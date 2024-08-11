import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Navbar from "./navbar";
import Home from "./home";
import BackgroundWrapper from "./background"; // Import the BackgroundWrapper component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <BackgroundWrapper hasBackground={true}>
              <Navbar />
              <Signup />
            </BackgroundWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <BackgroundWrapper hasBackground={true}>
              <Navbar />
              <Login />
            </BackgroundWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <BackgroundWrapper hasBackground={false}>
              <Navbar />
              <Home />
            </BackgroundWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
