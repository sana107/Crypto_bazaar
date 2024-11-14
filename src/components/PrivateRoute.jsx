import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import { Container, LinearProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn, check } = useAuthStatus();

  if (check) {
    return (
      <Container sx={{ padding: "80px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
