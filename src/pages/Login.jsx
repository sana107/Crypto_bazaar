import {
  Button,
  Card,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData; //check here

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
    }
    if (isError && message) {
      window.alert(message);
    }
  }, [user, message, isError]);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ margin: "20px" }} textAlign={"center"}>
          Login Here
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            color="success"
            variant="outlined"
            label="Email"
            fullWidth
            name="email"
            value={email}
            onChange={handleChange}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            sx={{ margin: "20px 0px" }}
            name="password"
            value={password}
            onChange={handleChange}
          ></TextField>
          <Button type="submit" variant="contained" color="success" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
