import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { yellow } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
function ProductList({ productData }) {
  const breakpoints = {
    default: 4,
    1200: 3,
    750: 2,
    500: 1,
  };
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {productData.map((prod) => (
            <div>
              <Link to={`/product/${prod.Url}`} className="list">
                <Card
                  key={prod.id}
                  elevation={2}
                  className={`${classes.animate}`}
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
                      <div className={classes.disp}>
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
              </Link>
            </div>
          ))}
        </Masonry>
      </ThemeProvider>
    </div>
  );
}

export default ProductList;

const useStyles = makeStyles((theme) => {
  return {
    color: {
      backgroundColor: yellow[700],
    },
    animate: {
      transition: "0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    disp: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
  },
  typography: {
    h6: {
      fontSize: "1.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
      fontFamily: "Montserrat",
    },
    body2: {
      fontSize: "0.8rem",
      lineHeight: 1.2,
      fontFamily: "Montserrat",
    },
  },
});
