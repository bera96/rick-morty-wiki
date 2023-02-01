import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episodes: [],
  info: {},
  episode: {},
  char: []
};

const episodesSlice = createSlice({
  name: "episodesSlice",
  initialState: initialState,
  reducers: {
    getEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    getEpisode: (state, action) => {
      state.episode = action.payload;
    },
    getChars: (state, action) => {
      state.char = action.payload

    },
    getInfo: (state, action) => {
      state.info = action.payload;
      state.info.stage = "episode";
    },
  },
});

export const { getEpisodes, getInfo, getEpisode,getChars } = episodesSlice.actions;

export default episodesSlice.reducer;
