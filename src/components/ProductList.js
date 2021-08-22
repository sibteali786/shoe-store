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
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
function ProductList() {
  const breakpoints = {
    default: 4,
    1200: 3,
    750: 2,
    500: 1,
  };
  const [productData, setproductData] = useState([]);
  useEffect(() => {
    requestSneakers();
  }, []);

  async function requestSneakers() {
    try {
      const data = await fetch(
        `https://stockx.com/api/browse?productCategory=sneakers&_search=all&dataType=product`
      );
      const jsonData = await data.json();
      const { Products } = jsonData;
      const modProducts = Products.map((prod) => ({
        id: prod.id,
        Brand: prod.brand,
        category: prod.category,
        Gender: prod.gender,
        description: prod.description,
        Title: prod.title,
        Name: prod.name,
        Price: prod.retailPrice,
        Media: prod.media,
      }));
      setproductData(modProducts);
      console.log(modProducts);
    } catch (error) {
      console.log(error);
    }
  }
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
              <Card key={prod.id} elevation={2} className={`${classes.animate}` }>
                <CardHeader
                  avatar={
                    <Avatar className={classes.color}>
                      {prod.Title[0].toUpperCase()}
                    </Avatar>
                  }
                  title={prod.Title}
                  subheader={prod.Name}
                  className={`${classes.bodyText}`}
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
