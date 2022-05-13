import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

const slice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getEpSucces(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getMoreEpSucces(state, action) {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload];
    },
  },
});

export default slice.reducer;

export const getAllEPs = () => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      dispatch(slice.actions.getEpSucces(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
};
export const getMoreEPs = (pageNum) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/?page=${pageNum}`
      );
      dispatch(slice.actions.getMoreEpSucces(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
};
