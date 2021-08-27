import React from "react";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import { red } from "@material-ui/core/colors";
function ProductIndex({ productData }) {
  const classes = useStyles();

  const { productId } = useParams();
  const product = productData.filter((prod) => prod.Url === productId);
  if (!product[0]) {
    return (
      <div className="arrange">
        <WarningIcon className={classes.disp} />
        <h2 style={{ marginLeft: "20px", color: "red" }}>Not Found !</h2>
      </div>
    );
  }
  const { Name, Media, Title, Price, Brand, description } = product[0];
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card elevation={20} className={`${classes.root} ${classes.backcolor}`}>
          <div>
            <CardMedia
              component="img"
              title={Title}
              image={Media.smallImageUrl}
              src={Media.smallImageUrl}
            />
          </div>
          <div>
            <CardHeader title={`${Brand}`} className={`${classes.content}`} />
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
      </ThemeProvider>
    </div>
  );
}

export default ProductIndex;
let theme = createTheme({
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

theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
      [theme.breakpoints.down(850)]: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    backcolor: {
      backgroundColor: "rgb(0,0,0,1)",
    },
    content: {
      color: "rgb(255,255,255,1)",
    },
    disp: {
      fontSize: "5rem",
      color: red[800],
    },
  };
});
