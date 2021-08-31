import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import ProductList from "./components/ProductList";
import ProductIndex from "./components/ProductIndex";
import NotFound from "./components/NotFound";
import ContactUs from "./components/ContactUs";
import ProductShortList from "./components/ProductShortList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  IconButton,
  Toolbar,
  Container,
  Typography,
  makeStyles,
  AppBar,
  Drawer,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
function App() {
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
        Url: prod.urlKey,
      }));
      setproductData(modProducts);
      console.log(Products);
    } catch (error) {
      console.log(error);
    }
  }
  const classes = useStyles();
  const [open, isOpen] = useState(false);
  const handleDrawer = () => {
    isOpen(!open);
  };
  return (
    <div className="body">
      <Container classes={{ maxWidthLg: `${classes.maxWidthLg}` }}>
        <Router>
          <nav>
            <div className={`${classes.toolbar} ${classes.margintop}`}></div>
            <AppBar
              className={`${classes.backColor} ${classes.elevation4}`}
              // className={classes.appbar}
            >
              <Toolbar className={`${classes.root} ${classes.regular}`}>
                <Typography
                  variant="h3"
                  color="#ffffff"
                  className={`${classes.h3}`}
                >
                  SHOE STORE
                </Typography>
                <div className={`${classes.root}`}>
                  <div className={`${classes.root} ${classes.link}`}>
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
                    <Typography variant="h6" className={classes.h6}>
                      <Link to="contact" className="list">
                        Contact Us
                      </Link>
                    </Typography>
                  </div>
                  <IconButton
                    onClick={handleDrawer}
                    style={{ color: "#FFFFFF", fontSize: "2.5rem" }}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            <Drawer
              anchor="top"
              open={open}
              onClose={() => isOpen(false)}
              className={`${classes.DrawerWidth} `}
              classes={{ paper: `${classes.drawerPaper} ${classes.paper}` }}
            >
              <Typography variant="h6" className={classes.h_6}>
                <Link to="/" className="list">
                  Home
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.h_6}>
                <Link to="product" className="list">
                  Product
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.h_6}>
                <Link to="about" className="list">
                  About
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.h_6}>
                <Link to="contact" className="list">
                  Contact Us
                </Link>
              </Typography>
            </Drawer>
          </nav>
          <Routes>
            <Route path="/" element={<Home productData={productData} />} />
            <Route path="product" element={<Product />}>
              <Route
                path="/"
                element={<ProductList productData={productData} />}
              ></Route>
              <Route
                path=":productId"
                element={<ProductIndex productData={productData} />}
              ></Route>
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
const drawerWidth = "100%";
const useStyles = makeStyles((theme) => {
  return {
    maxWidthLg: {
      maxWidth: 1350,
      minHeight: "100vh",
    },
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
    },
    backColor: {
      backgroundColor: "#010101",
    },
    h6: {
      fontSize: "1rem",
      fontFamily: "Montserrat",
      fontWeight: "500",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      transition: "0.2s ease-in",
      "&:hover": {
        textDecoration: "underline",
        textUnderlinePosition: "under",
        textDecorationThickness: "1.5px",
        transform: "scale(1.2)",
      },
    },
    h_6: {
      fontSize: "1.3rem",
      fontFamily: "Montserrat",
      fontWeight: "500",
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(5),
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
      marginTop: theme.spacing(10),
    },
    elevation4: {
      boxShadow:
        "0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 6px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 14px 3px rgba(0, 0, 0, 0.12)",
    },
    h3: {
      fontFamily: "Rampart One",
      // color: yellow[800],
    },
    regular: {
      minHeight: 100,
    },
    link: {
      [theme.breakpoints.down(850)]: {
        display: "none",
      },
    },
    menuButton: {
      display: "none",
      [theme.breakpoints.down(850)]: {
        display: "block",
      },
    },
    DrawerWidth: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  };
});
