import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import navReducer from "./features/nav/navSlice";
import countriesReducer from "./features/countries/countriesSlice";
import centralBankReducer from "./features/central_bank/centralBankSlice";
import gameReducer from "./features/game/gameSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    nav: navReducer,
    countries: countriesReducer,
    centralBank: centralBankReducer,
    game: gameReducer,
  },
});
