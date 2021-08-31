import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { yellow } from "@material-ui/core/colors";
import Product from "./Product";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core";

export default ProductShortList;

function ProductShortList({ productData }) {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid
            item
            sm={12}
            md={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="h4"
              color="initial"
              style={{
                fontFamily: "Montserrat",
                float: "left",
                marginBottom: "30px",
              }}
            >
              Choose from a variety of different sneakers
            </Typography>

            <Typography
              variant="body2"
              color="initial"
              style={{
                fontFamily: "montserrat",
                marginBottom: "30px",
                width: "80%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              reprehenderit dicta quisquam vitae fugit quas modi cumque debitis
              ullam voluptas, voluptates maxime fuga temporibus qui, facere
              libero! Doloribus provident, similique, recusandae aliquid quis
              nam consequatur possimus iste, excepturi eius consequuntur.
            </Typography>
            <Link to="product" element={<Product />}>
              <Button
                variant="outlined"
                color="primary"
                style={{
                  color: "#FFFFFF",
                  border: "4px solid #FFFFFF",
                  width: "40%",
                  fontWeight: "700",
                }}
                >
                Product
              </Button>
          </Link>
          </Grid>
          {productData.slice(0, 2).map((prod) => (
            <Grid
            item
            key={prod.id}
              xs={12}
              sm={5}
              md={3}
              className={`${classes.spacing}`}
            >
              <Card
                key={prod.id}
                elevation={2}
                className={`${classes.animate} ${classes.shape}`}
                >
                <CardHeader
                  avatar={
                    <Avatar className={classes.color}>
                      {prod.Title[0].toUpperCase()}
                    </Avatar>
                  }
                  title={prod.Title}
                  subheader={prod.Name}
                />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    title={prod.Title}
                    image={prod.Media.thumbUrl}
                    src={prod.Media.thumbUrl}
                    />
                  <CardContent>
                    <div className={classes.dispt}>
                      <Typography variant="h6" color="primary">
                        Price
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${prod.Price}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}
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
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
      [theme.breakpoints.down(1060)]: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
    },

    color: {
      backgroundColor: yellow[700],
    },
    animate: {
      transition: "0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    spacing: {
      [theme.breakpoints.down(950)]: {
        marginTop: theme.spacing(3),
      },
    },
    disp: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      [theme.breakpoints.down(950)]: {
        justifyContent: "center",
        alignItems: "space-between",
      },
    },
    dispt: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    outlinedPrimary: {
      color: "ffffff",
    },
  };
});
