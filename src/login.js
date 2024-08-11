import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      navigate("/home");
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
      marginTop={7}
      marginLeft="30%"
      marginRight="30%"
      paddingTop={5}
      paddingBottom={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="box"
      onSubmit={handleLogin} // Use correct handleLogin function
    >
      <Box
        display="flex"
        flexDirection="column"
        border="2px solid black"
        padding={4}
        paddingBottom={6}
        className="gradient"
      >
        <h1>Login Form</h1>
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
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
