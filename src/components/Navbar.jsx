import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../features/auth/authSlice";


const Navbar = () => {

  const {user} = useSelector((state) => state.auth)
  const {CartItems} = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logOutUser())
  }
//#fff8e1
  return (
    <AppBar sx={{backgroundColor: "#ffecb3"}}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h5">
          <Link to={"/"} style={{ color: 'black'}} >CryptoBazar</Link>
        </Typography>

        {user ? (
          <>
            <Button
              size="small"
              sx={{ margin: "0px 5px" ,backgroundColor: "#ffb300"}}
              variant="contained"
              // color="error"
              onClick={logOut}
            >
              Logout
            </Button>
            <Badge badgeContent={CartItems.length} color="error">
              <Button
                size="small"
                sx={{ margin: "0px 5px",backgroundColor: "#ffd54f" }}
                variant="contained"
                // color="secondary"
                endIcon={<ShoppingCartIcon />}
              >
                <Link to={"/cart"}>Cart</Link>
              </Button>
            </Badge>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button
                size="small"
                sx={{ margin: "0px 5px" ,backgroundColor:"#ffb300"}}
                variant="contained"
                
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                size="small"
                sx={{ margin: "0px 5px" ,backgroundColor:"#ffd54f"}}
                variant="contained"
                
              >
                Register
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
