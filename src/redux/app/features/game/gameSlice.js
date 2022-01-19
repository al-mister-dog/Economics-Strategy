import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const setGame = createAsyncThunk(
  "game/setGame",
  async ({ country, tradeBloc, alliance, governmentControl, user }) => {
    try {
      const response = await fetch(
        "http://localhost:3002/api/v1/game/setgame",
        {
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
        }
      );
      if (response.status === 200) {
        return {
          country: country.iso,
          tradeBloc,
          alliance,
          governmentControl,
          data: country,
          userId: user.id,
        };
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// const getGame = createAsyncThunk("game/getGame", async ({ user }, thunkAPI) => {
//   try {
//     const response = fetch("http://localhost:3002/api/v1/game/getgame", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId: user.id,
//       }),
//     });
//     let data = await response.json();
//       console.log("data", data);

//       if (response.status === 200) {
//         return { ...data };
//       } else {
//         console.log("response is something else");
//         console.log(data);
//         return thunkAPI.rejectWithValue(data);
//       }
//   } catch (error) {
//     console.log(error);
//   }
// });

const saveGame = createAsyncThunk(
  "game/saveGame"
  //update game data. probably the data row
  //GAME SHOULD BE SAVED WHENEVER GAME DATA CHANGES// MAYBE ON APP OR ROUTER PAGE
);

const deleteGame = createAsyncThunk();
//delete game instance

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
      state.gameData = payload;
      state.gameIsActivated = true;
      state.isFetching = false;
    },
    [setGame.pending]: (state) => {
      state.gameIsActivated = false;
      state.isFetching = true;
    },
    [setGame.rejected]: (state) => {
      state.gameIsActivated = false;
      state.isFetching = false;
      state.isError = true;
    },
    // [getGame.fulfilled]: (state, { payload }) => {
    //   state.gameData = payload;
    //   state.gameIsActivated = true;
    //   state.isFetching = false;
    // },
    // [getGame.pending]: (state) => {
    //   state.gameIsActivated = false;
    //   state.isFetching = true;
    // },
    // [getGame.rejected]: (state) => {
    //   state.gameIsActivated = false;
    //   state.isFetching = false;
    //   state.isError = true;
    // },
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
