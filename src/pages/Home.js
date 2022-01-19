import { useSelector } from "react-redux";
import { userSelector } from "../redux/app/features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { Paper, Button, Box, Typography, makeStyles } from "@material-ui/core";

import owl from "./__owl.jpeg";
import { useEffect } from "react";

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
      margin: "auto",
      padding: "10px",
      width: "90%",
    },
  },
  img: {
    "@media (max-width: 620px)": {
      width: "10rem",
    },
  },
  title: {
    "@media (max-width: 620px)": {
      fontSize: "1.4rem",
    },
  },
  auth: {
    width: "50%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 620px)": {
      marginTop: 0,
      width: "90%",
      margin: "auto",
    },
  },
  slogan: {
    fontSize: "1.4rem",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
  sloganLatin: {
    margin: "10px",
    "@media (max-width: 620px)": {
      fontSize: "0.6rem",
      color: "f7f7f7",
    },
  },
}));

export default function Home() {
  const {user} = useSelector(userSelector)
  const classes = useStyles();
  const text =
    "What is money? Take control of the monetary and financial system and find out.";
    const navigate = useNavigate();
    useEffect(() => {
      if (user) {
        navigate('dashboard')
      }
    }, [user])
  return (
    <Paper className={classes.paper}>
      <Box className={classes.welcome}>
        <img className={classes.img} src={owl} alt="owl" />
        <Typography variant="h3" className={classes.title}>
          Trial of the Pyx
        </Typography>
      </Box>
      <Box className={classes.auth}>
        <Typography className={classes.slogan} align="justify">
          {text}
        </Typography>
        <Typography className={classes.sloganLatin} variant="body1">
          pecunia, si uti scis, ancilla est; si nescis, domina
        </Typography>
        <Box sx={{ display: "flex", marginTop: "25px" }}>
          <Link to="login" style={{textDecoration: "none", color: "white"}}>
            <Button color="primary" variant="contained" style={{ margin: 10 }}>
              Login
            </Button>
          </Link>
          <Link to="signup" style={{textDecoration: "none", color: "white"}}>
            <Button color="primary" variant="contained" style={{ margin: 10 }}>
              Signup
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}
