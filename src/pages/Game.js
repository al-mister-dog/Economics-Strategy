import { Paper, makeStyles } from "@material-ui/core";
import Spinner from "../components/Spinner"
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

export default function Game() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paper}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Spinner></Spinner>
      <h2>The Coin is Currently Debased</h2>
      </div>
      
    </Paper>
  );
}

