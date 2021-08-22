import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
function App() {
  const classes = useStyles();
  return (
    <div className="body">
      <Container>
        <Router>
          <nav>
            <div className={`${classes.toolbar} ${classes.margintop}`}></div>
            <AppBar
              className={`${classes.backColor} ${classes.elevation4}`}
              // className={classes.appbar}
            >
              <Toolbar className={classes.root}>
                <Typography variant="h6" className={classes.h6}>
                  <Link to="/" className="list">
                    Home
                  </Link>
                </Typography>
                <Typography variant="h6" className={classes.h6}>
                  <Link to="product" className="list">
                    Product
                  </Link>
                </Typography>
                <Typography variant="h6" className={classes.h6}>
                  <Link to="about" className="list">
                    About
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />}>
              <Route path="/" element={<ProductList />}></Route>
            </Route>
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
    },
    backColor: {
      backgroundColor: "#181719",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "700",
      marginLeft: theme.spacing(3),
      transition: "0.2s ease-in",
      "&:hover": {
        textDecoration: "underline",
        textUnderlinePosition: "under",
        textDecorationThickness: "1.5px",
        transform: "scale(1.2)",
      },
    },
    toolbar: theme.mixins.toolbar,
    margintop: {
      marginTop: theme.spacing(15),
    },
    elevation4: {
      boxShadow:
        "0px 10px 10px -3px rgba(255, 253, 253, 0.2),0px 10px 14px 1px rgba(255, 253, 253, 0.14),0px 4px 18px 3px rgba(255, 255, 255, 0.12)",
    },
  };
});
