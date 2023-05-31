import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState(""); // State variable to hold the error message

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "login") => {
    try {
      const res = await axios.post(`http://localhost:5010/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      const data = res.data;
      console.log(data);
      return data;
    } catch (err) {
      const errorMessage = err.response.data.message; // Extract the error message from the response
      setError(errorMessage); // Set the error message state variable
      console.log(err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      const data = isSignup
        ? await sendRequest("signup")
        : await sendRequest("login");
      localStorage.setItem("userId", data.user._id);
      dispatch(authActions.login());
      navigate("/blogs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          backgroundColor="#fff"
          alignItems="center"
          justifyContent={"center"}
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
          sx={{
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.20)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 16px 32px rgba(0, 0, 0, 0.50)",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          {error && (
            <Typography
              variant="body2"
              color="error"
              textAlign="center"
              margin={2}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{
              margin: 1,
              borderRadius: 10,
              backgroundColor: "#00796b",
              color: "#ffffff",
            }}
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
