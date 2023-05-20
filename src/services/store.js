import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    value: null,
  },
  reducers: {
    SET_MOVIE: (state, action) => {
      state.value = action.payload;
    },
  },
});

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    value: null,
  },
  reducers: {
    SET_TV: (state, action) => {
      state.value = action.payload;
    },
  },
});

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    value: null,
  },
  reducers: {
    SET_GENRE: (state, action) => {
      state.value = action.payload;
    },
  },
});

const homemovieSlice = createSlice({
  name: "hmMovie",
  initialState: {
    value: null,
  },
  reducers: {
    SET_HMMOVIE: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SET_GENRE } = genreSlice.actions;
export const { SET_MOVIE } = movieSlice.actions;
export const { SET_HMMOVIE } = homemovieSlice.actions;
export const { SET_TV } = tvSlice.actions;

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    tv: tvSlice.reducer,
    genre: genreSlice.reducer,
    hmmovie: homemovieSlice.reducer,
  },
});
