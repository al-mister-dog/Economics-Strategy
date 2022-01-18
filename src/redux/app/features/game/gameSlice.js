import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      console.log(action.payload)
      state.country = action.payload;
    },
    setTradeBloc: (state, action) => {
      state.tradeBloc = action.payload;
    },
    setAlliance: (state, action) => {
      state.alliance = action.payload;
    },
    setGovernmentControl: (state, action) => {
      state.governmentControl = action.payload;
    },
    setGameSettings: (state, action) => {
      state.gameSettings = action.payload;
    },
  },
});

export const { setCountry, setTradeBloc, setAlliance, setGovernmentControl, setGameSettings } = gameSlice.actions;

export const gameSelector = (state) => state.game;

export default gameSlice.reducer;
