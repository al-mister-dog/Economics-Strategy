import { useSelector } from "react-redux";
import { gameSelector } from "../../redux/app/features/game/gameSlice";
import GameForm from "../../components/Dashboard/GameForm";
import GameDashboard from "../../components/Dashboard/GameDashboard";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    margin: "auto",
    marginTop: "6rem",
    padding: "25px",
    "@media (max-width: 620px)": {
      width: "95vw",
      padding: "5px",
      marginTop: "4rem",
    },
  },
}));

export default function CentralBank() {
  const { gameData } = useSelector(gameSelector);
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paper}>
      {Object.keys(gameData).length ? <GameDashboard /> : <GameForm />}
    </Paper>
  );
}
