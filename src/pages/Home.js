import {
  Paper,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

import owl from "./__owl.jpeg";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#fdfbf7",
    maxWidth: "70vw",
    maxHeight: "80vh",
    margin: "auto",
    marginTop: "2rem",
    padding: "25px",
    display: "flex",
    "@media (max-width: 620px)": {
      minHeight: "70vh",
      width: "100vw",
      padding: "5px",
      flexDirection: "column",
      maxHeight: "200vh",
    },
  },
  welcome: {
    width: "50%",
    "@media (max-width: 620px)": {
      padding: "10px",
      // display: "flex",
      // alignItems: "center",
      width: "90%",
      margin: "auto",
    },
  },
  img: {
    "@media (max-width: 620px)": {
      width: "10rem",
    },
  },
  title: {
    "@media (max-width: 620px)": {
      // fontSize: "1.5rem"
      display: "none",
    },
  },
  auth: {
    width: "50%",
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 620px)": {
      marginTop: 4,
      width: "90%",
      margin: "auto",
    },
  },
}));

export default function Home() {
  const classes = useStyles()
  const text =
    "What is money? Take control of the monetary and financial system and find out.";
  return (
    <Paper className={classes.paper}>
      <Box className={classes.welcome}>
        <img className={classes.img} src={owl} alt="owl" />
        <Typography variant="h3" className={classes.title}>
          Trial of the Pyx
        </Typography>
      </Box>
      <Box className={classes.auth}>
          <Typography component="h1" variant="h5">
           Bla
          </Typography>
      </Box>
    </Paper>
  );
}
