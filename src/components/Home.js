import React from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
function Home() {
  const classes = useStyles();
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <ThemeProvider theme={theme}>
        <div className={`${classes.root}`}>
          <Grid item className={`${classes.OnDiv}`}>
            <Typography variant="h2">Welcome to Shoe Store !</Typography>

            <Typography variant="textPrimary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              voluptates dolor eveniet culpa magnam id quod commodi ex
              cupiditate! Sit dolore cupiditate repellat magnam obcaecati sunt
              exercitationem odit, eveniet in.
            </Typography>
          </Grid>
          <Grid item>
            <CardMedia
              component="img"
              image={require("../images/old.jpg").default}
              src={require("../images/old.jpg").default}
            />
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
let theme = createTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      [theme.breakpoints.down(850)]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      },
    },
    OnDiv: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
  };
});
