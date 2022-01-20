import { useSelector } from "react-redux";
import {gameSelector} from "../../../redux/app/features/game/gameSlice"
import Reserves from "./charts/Reserves"

import { Box, Button } from "@material-ui/core";

export default function GameDashboard() {
  const {gameData} = useSelector(gameSelector);
  console.log(gameData)
  return (
    <Box>
      <Reserves/>
      <h1>game dashboard</h1>
      <p>{gameData.data.NAME}</p>
      <p>{gameData.tradeBloc}</p>
      <p>{gameData.alliance}</p>
      <p>{gameData.governmentControl}</p>
    </Box>
  );
}
