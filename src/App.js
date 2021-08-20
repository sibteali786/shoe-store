import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
            <div className={classes.toolbar}></div>
            <AppBar
              className={classes.backColor}
              // className={classes.appbar}
              elevation={2}
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
            <Route path="product" element={<Product />} />
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
      marginLeft: theme.spacing(3),
      transition: "0.2s ease-in",
      "&:hover": {
        textDecoration: "underline",
        textUnderlinePosition: "under",
        textDecorationThickness: "1.5px",
        transform: "scale(1.1)",
      },
    },
    toolbar: theme.mixins.toolbar,
  };
});
