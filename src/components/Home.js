import React from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import ProductShortList from "./ProductShortList";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
function Home({ productData }) {
  const classes = useStyles();
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        backgroundColor: "#040403",
      }}
    >
      <ThemeProvider theme={theme}>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          style={{ margin: "2rem auto 2rem" }}
        >
          <Grid item xs={11} sm={11} md={5}>
            <Typography variant="h2" className={`textAlign `}>
              Shoe Store
            </Typography>

            <Typography
              variant="body1"
              classes={{ body1: `${classes.text}` }}
              className={`textAlign`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              voluptates dolor eveniet culpa magnam id quod commodi ex
              cupiditate! Sit dolore cupiditate repellat magnam obcaecati sunt
              exercitationem odit, eveniet in.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={5}>
            <CardMedia
              component="img"
              image={require("../images/old.jpg").default}
              src={require("../images/old.jpg").default}
            />
          </Grid>
        </Grid>
        <div className={`${classes.shape}`}>
          <ProductShortList productData={productData} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1250,
      xl: 1500,
    },
  },
});

theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => {
  return {
    OnDiv: {
      width: "50%",
      [theme.breakpoints.down(850)]: {
        width: "60%",
      },
    },
    headMargin: {
      marginBottom: theme.spacing(3),
    },
    text: {
      fontWeight: 50,
    },
    shape: {
      height: "100vh",
    },
  };
});
