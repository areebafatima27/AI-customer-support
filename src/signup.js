import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
      navigate("/login"); // Ensure this line is called
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      marginTop={5}
      marginLeft="30%"
      marginRight="30%"
      paddingTop={5}
      paddingBottom={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="gradient-background"
      onSubmit={handleSignup} // Ensure the form's onSubmit is set correctly
    >
      <Box
        display="flex"
        flexDirection="column"
        border="2px solid black"
        padding={4}
        paddingBottom={6}
        className="gradient"
      >
        <h1>Signup Form</h1>
        <TextField required id="outlined-Name" label="Name" className="text" />
        <TextField
          required
          id="outlined-Email"
          label="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          className="text"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "40%",
            display: "flex",
            bgcolor: "#9654",
            color: "#333",
          }}
        >
          SignUp!
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
