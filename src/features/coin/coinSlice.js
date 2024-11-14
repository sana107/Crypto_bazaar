import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: true,
    allcoins: null,
    coin: null,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTrendingcoins.pending, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(getTrendingcoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allcoins = action.payload
    })
    .addCase(getTrendingcoins.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload
    })



    .addCase(getCoin.pending, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(getCoin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.coin = action.payload
    })
    .addCase(getCoin.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload
    });
  },
});

export default coinSlice.reducer;

//FEtching coins and set into state using thunkapi
export const getTrendingcoins = createAsyncThunk("FETCH/COINS", async () => {
  try {
    return await coinService.fetchTrendingcoins();
  } catch (error) {
    console.log(error);
  }
});


//FEtch coin and set into state using thunkapi
export const getCoin = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await coinService.fetchCoin(id);
  } catch (error) {
    console.log(error);
  }
});
