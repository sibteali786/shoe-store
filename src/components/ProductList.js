import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { yellow } from "@material-ui/core/colors";
import cx from "react-cx";
import { createTheme, ThemeProvider } from "@material-ui/core";
function ProductList() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="space-between"
          justifyContent="center"
        >
          {Object.entries(shoes).map(([keyId, { name, img }]) => (
            <Grid item key={keyId} xs={12} sm={6} md={3}>
              <Card elevation={2} className={classes.animate}>
                <CardHeader
                  avatar={<Avatar className={classes.color}>{"N"}</Avatar>}
                  action={
                    <IconButton>
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title={name}
                  className={`${classes.bodyText}`}
                />
                <CardActionArea>
                  <CardMedia
                    title={name.toUpperCase()}
                    image={img}
                    src={img}
                    className={`${classes.media}`}
                  />
                  <CardContent>
                    <Typography variant="body1" color="textSecondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora, rem commodi deleniti ducimus iure dolores saepe
                      mollitia! Quaerat tenetur tempore cupiditate.
                    </Typography>
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

export default ProductList;

const shoes = {
  Puma: {
    name: "Diesel",
    img: "https://cdn.shopify.com/s/files/1/1692/9471/products/7b4e56ad-b683-43dd-adcd-38b842485311-Img-shoe_800x.jpg?v=1629545582",
  },
  Adidas: {
    name: "Salomon",
    img: "https://cdn.shopify.com/s/files/1/1692/9471/products/ae144579-3a34-4e00-adfd-cb1e07712215-Img-shoe_800x.jpg?v=1629527629",
  },
  Nike: {
    name: "Nike",
    img: "https://cdn.shopify.com/s/files/1/1692/9471/products/7fcc9a26-70a7-4272-aed1-16063595475a-Img-shoe_800x.jpg?v=1629545536 ",
  },
};

const useStyles = makeStyles((theme) => {
  return {
    color: {
      backgroundColor: yellow[700],
    },
    media: {
      height: 200,
    },
    animate: {
      transition: "0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  };
});

const theme = createTheme({
  typography: {
    body2: {
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    body1: {
      fontSize: "0.8rem",
    },
  },
});
