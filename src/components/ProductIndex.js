import React from "react";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
function ProductIndex({ productData }) {
  const classes = useStyles();

  const { productId } = useParams();
  const product = productData.filter((prod) => prod.Url === productId);
  if (!product[0]) {
    return <h2>Not Found</h2>;
  }
  const { Name, Media, Title, Price, Brand, Category, description } =
    product[0];
  return (
    <div>

      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={{ maxWidth: "100%", flexBasis: "100%" }}>
            <Card
              elevation={20}
              className={`${classes.disp} ${classes.backcolor}`}
            >
              <div>
                <CardMedia
                  component="img"
                  title={Title}
                  image={Media.smallImageUrl}
                  src={Media.smallImageUrl}
                  className={`${classes.media}`}
                />
              </div>
              <div>
                <CardHeader
                  title={`${Brand}`}
                  className={`${classes.content}`}
                />
                <CardContent>
                  <Typography variant="h4">{Name}</Typography>
                  <Typography variant="body1">{Title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                  <div className={`${classes.disp}`}>
                    <Typography variant="h4">Price</Typography>
                    <Typography variant="h4">${Price}</Typography>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default ProductIndex;
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h5: {
      fontWeight: 700,
      fontSize: "4rem",
    },
    h4: {
      fontSize: "3rem",
      color: "rgb(255, 255, 255,1)",
    },
    body1: {
      fontWeight: 700,
      color: "rgb(255, 255, 255,1)",
    },
    body2: {
      color: "rgb(255, 255, 255,0.5)",
    },
  },
});
const useStyles = makeStyles((theme) => {
  return {
    disp: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
    },
    media: {
      height: "auto",
      width: "auto",
      maxWidth: "250",
    },
    backcolor: {
      backgroundColor: "rgb(0,0,0,1)",
    },
    content: {
      color: "rgb(255,255,255,1)",
    },
  };
});
