import { useSelector, useDispatch } from "react-redux";
import {
  userSelector,
  fetchUserBytoken,
} from "../../redux/app/features/userSlice";
import { useEffect } from "react";
import { Paper, makeStyles } from "@material-ui/core";

import GameForm from "../../components/Dashboard/GameForm";
import GameDashboard from "../../components/Dashboard/GameDashboard";

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
  const { user, isFetching, isError } = useSelector(userSelector);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }));
  }, []);

  return (
    <Paper elevation={0} className={classes.paper}>
      <GameForm />
      <GameDashboard />
    </Paper>
  );
}
