import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: userExist || null,
    message: "",
  },
  reducers: {
    // resetState: (state) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.isSuccess = false;
    //   state.message = "went wrong";
    // },
  },
  extraReducers: (builder) => {
    builder
      //register managing
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //Login managing
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload || "something went wrong";
      })
      .addCase(logOutUser.fulfilled, (state,action) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
      });
  },
});

// export const { resetState } = authSlice.actions;
export default authSlice.reducer;

//register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login user

export const loginUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});
