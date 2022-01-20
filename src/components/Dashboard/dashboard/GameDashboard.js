import { useSelector } from "react-redux";
import {gameSelector} from "../../../redux/app/features/game/gameSlice"
import Reserves from "./charts/Reserves"
import Inflation from "./charts/Inflation"
import Policy from "./charts/Policy"
import { Box, Typography, Button } from "@material-ui/core";

export default function GameDashboard() {
  const {gameData} = useSelector(gameSelector);
  console.log(gameData)
  return (
    <Box sx={{display: "flex"}}>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "65%", border: "1px solid black"}}>
      <Reserves/>
      <Inflation/>
      <Policy/>
      </Box>
      <Box sx={{width: "35%", display: "flex", flexDirection: "column"}}>
<Typography>item</Typography>
<Typography>item</Typography>
<Typography>item</Typography>
      <Typography>item</Typography>
      </Box>
      
    </Box>
  );
}
