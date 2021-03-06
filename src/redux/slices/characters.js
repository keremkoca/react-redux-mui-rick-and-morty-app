import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

const slice = createSlice({
  name: "chars",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCharsSucces(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getMoreCharsSucces(state, action) {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload];
    },
  },
});

export default slice.reducer;

export const getAllChars = () => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      dispatch(slice.actions.getCharsSucces(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
};
export const getMoreChars = (pageNum) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNum}`
      );
      dispatch(slice.actions.getMoreCharsSucces(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
};
