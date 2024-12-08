import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import Hero from "../assets/hero.png";
import coin from "../assets/the_coin.png"
import React from "react";
import {motion} from "framer-motion";

const HeroSection = () => {
  const customStyle = {
    padding: "50px 0px",
    backgroundColor:"black",
  };

  return (
    <Container sx={customStyle} >
      <Grid container spacing={2} sx={{backgroundColor:"black",color:"whitesmoke"}}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              //  width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              height: "500px",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Crypto Bazar At Your Hand.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Shop Crypto 24/7 Everywhere Anytime
            </Typography>
            <Button variant="contained" sx={{background:"#ffecb3" , color:"black"}}>
              Buy Now
            </Button>
            {/* //#fdd472 */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{mt:8}}>
            {/* <img style={{ height: "350px" }} src={coin} alt="" /> */}
            <motion.img
              src={coin}
              alt="coin"
              style={{ height: "320px" ,mt:6 }}
              animate={{
                y: [0, -50, 0], // Move up to -50px and return to 0
              }}
              transition={{
                duration: 4, // Time for the animation
                repeat: Infinity, // Infinite loop
                ease: "easeInOut", // Smooth easing
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
