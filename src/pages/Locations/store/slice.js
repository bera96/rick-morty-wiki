import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  info: {},
};

const locationsSlice = createSlice({
  name: "locationsSlice",
  initialState: initialState,
  reducers: {
    getLocations: (state, action) => {
      state.locations = action.payload;
    },
    getInfo: (state, action) => {
      state.info = action.payload
      state.info.stage = "location";
    }
  },
});

export const { getLocations, getInfo } = locationsSlice.actions;

export default locationsSlice.reducer
