import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingcoins } from "../features/coin/coinSlice";

const Home = () => {
  const { allcoins, isLoading, isError, message } = useSelector(
    (state) => state.coin
  );


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTrendingcoins());
  },[])

  if (isLoading) {
    return (
      <>
        <HeroSection />
        <LinearProgress sx={{ margin: "20px 0px" }} />
      </>
    );
  }

  if (isError && message) {
    return (
      <>
        <HeroSection>
          <Container sx={{ margin: "20px 0px" }}>
            <Typography
              variant="h1"
              textAlign={"center"}
              color="error"
            ></Typography>
          </Container>
        </HeroSection>
      </>
    );
  }
  return (
    <>
      <HeroSection />
      <Typography variant="h4" textAlign={"center"} sx={{ margin: "20px 0px" }}>
        Top Trending Coins
      </Typography>

      <Container>
        {!allcoins ? (
          <Typography variant="h5" color="error" textAlign={"center"}>
            404 No Coins Found
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {allcoins.map((coin,index) => (
              <CoinCard key={index} coin={coin} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Home;
