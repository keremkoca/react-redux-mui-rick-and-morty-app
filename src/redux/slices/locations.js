import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoading: false,
  error: {},
  data: [],
};

const slice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getLocSucces(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getMoreLocSucces(state, action) {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload];
    },
  },
});

export default slice.reducer;

export const getAllLocs = () => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      dispatch(slice.actions.getLocSucces(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
};
export const getMoreLocs = (pageNum) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/?page=${pageNum}`
      );
      dispatch(slice.actions.getMoreLocSucces(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
};
