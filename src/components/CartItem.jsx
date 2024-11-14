import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {

  
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(remove(id));
  };

  console.log(item);
  return (
    <Card sx={{ padding: "20px" }}>
      <CardMedia
        sx={{ height: 80 }}
        image={item?.image?.large}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Name : {item?.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          QTY : 1
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price : {item?.market_data?.current_price?.inr} INR
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" onClick={() => handleRemoveCart(item.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
