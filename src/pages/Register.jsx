import {
  Button,
  Card,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";


const Register = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, password, password2 } = formData; //check here

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match!");
      return;
    }
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
      toast.success("Login Successfully")
    }
    if (isError && message) {
      toast.error(message);
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
          Register Here
        </Typography>
        <form onSubmit={handleSubmit} >
          <TextField
            color="success"
            variant="outlined"
            label="Enter Name"
            type="text"
            fullWidth
            sx={{ margin: "5px 0px" }}
            name="name"
            value={name}
            onChange={handleChange}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Enter Email"
            type="text"
            fullWidth
            sx={{ margin: "5px 0px" }}
            name="email"
            value={email}
            onChange={handleChange}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Enter Password"
            type="password"
            fullWidth
            sx={{ margin: "5px 0px" }}
            name="password"
            value={password}
            onChange={handleChange}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Confirm Password"
            type="password"
            fullWidth
            sx={{ margin: "5px 0px" }}
            name="password2"
            value={password2}
            onChange={handleChange}
          ></TextField>
          <Button
            sx={{ margin: "10px 0px" }}
            variant="contained"
            color="success"
            fullWidth
            type="submit"
          >
            Register
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
