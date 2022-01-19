import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const setGame = createAsyncThunk(
  "game/setGame",
  async ({ country, tradeBloc, alliance, governmentControl, user }) => {
    try {
      fetch("http://localhost:3002/api/v1/game/setgame", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country,
          tradeBloc,
          alliance,
          governmentControl,
          userId: user.id,
        }),
      });
    } catch (error) {
      console.log(error)
    }
  }
);

const getGame = createAsyncThunk(
  "game/getGame",
  //retrieve game data
)

const saveGame = createAsyncThunk(
  "game/saveGame",
  //update game data. probably the data row
)

const deleteGame = createAsyncThunk(
  //delete game instance
)

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCountry: (state, action) => {
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
  },
  extraReducers: {
    [setGame.fulfilled]: (state, { payload }) => {
      console.log("hello from extra reducer");
    },
  },
});

export const {
  setCountry,
  setTradeBloc,
  setAlliance,
  setGovernmentControl,
  setGameSettings,
} = gameSlice.actions;

export const gameSelector = (state) => state.game;

export default gameSlice.reducer;
