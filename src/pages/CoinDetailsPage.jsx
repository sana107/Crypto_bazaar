import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "../features/coin/coinSlice";
import { useParams } from "react-router-dom";
import { add } from "../features/cart/cartSlice";

const CoinDetailsPage = () => {
  const { coin, isLoading, isError } = useSelector((state) => state.coin);
  // console.log(coin);

  const params = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  useEffect(() => {
    dispatch(getCoin(params.id));
  }, []);

  if (isLoading) {
    return (
      <>
        <Container sx={{ padding: "80px 0px" }}>
          <LinearProgress sx={{ margin: "20px 0px" }} />
        </Container>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Container sx={{ margin: "20px 0px" }}>
          <Typography
            variant="h1"
            textAlign={"center"}
            color="error"
          ></Typography>
        </Container>
      </>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card>
        <CardMedia
          sx={{ height: 250 }}
          image={coin?.image.large || "https://via.placeholder.com/250"}
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Name:{coin?.name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Symbol :{coin?.symbol}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Price :{coin?.market_data.current_price.inr} $
          </Typography>
          <Typography variant="body2">
            Category : {coin?.categories[0]}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleAddToCart(coin);
            }}
          >
            Add To Cart
          </Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CoinDetailsPage;
