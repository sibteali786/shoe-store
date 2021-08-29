import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
function About() {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <CardMedia
        component="img"
        image={require("../images/profile.jpg").default}
        src={require("../images/profile.jpg").default}
        className={classes.media}
      />
      <Typography
        variant="h3"
        color="initial"
        style={{ fontFamily: "Montserrat", marginBottom: "2rem" }}
      >
        Syed Sibteali Baqar
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "2rem",
        }}
      >
        <Link
          color="inherit"
          target="_blank"
          href="https://web.facebook.com/sibte.ali.923/"
        >
          <IconButton classes={{ root: `${classes.muiRoot}` }}>
            <FacebookIcon
              className={`${classes.iconAnim}`}
              style={{ fontSize: "2.5rem" }}
            />
          </IconButton>
        </Link>
        <Link
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/syed-sibteali-baqar-03167a17a/"
        >
          <IconButton classes={{ root: `${classes.muiRoot}` }}>
            <LinkedInIcon
              className={`${classes.iconAnim}`}
              style={{ fontSize: "2.5rem" }}
            />
          </IconButton>
        </Link>
        <Link
          color="inherit"
          target="_blank"
          href="https://twitter.com/SibtealiN"
        >
          <IconButton classes={{ root: `${classes.muiRoot}` }}>
            <TwitterIcon
              className={`${classes.iconAnim}`}
              style={{ fontSize: "2.5rem" }}
            />
          </IconButton>
        </Link>
        <Link
          color="inherit"
          target="_blank"
          href="https://github.com/sibteali786"
        >
          <IconButton classes={{ root: `${classes.muiRoot}` }}>
            <GitHubIcon
              className={`${classes.iconAnim}`}
              style={{ fontSize: "2.5rem" }}
            />
          </IconButton>
        </Link>
      </div>
      <Typography
        variant="subtitle1"
        color="initial"
        align="center"
        style={{ fontFamily: "Montserrat" }}
      >
        <span style={{ fontWeight: "700" }}>Syed Sibteali Baqar </span>is a tech
        enthusiastic whether it concern developing a project, Taking care of How
        it appears (Graphics Designing or Visualization) or How much secure it
        will be (Cybersecurity). A Computer Engineering student at NUST. He is
        interested to work as a{" "}
        <span style={{ fontWeight: "700" }}>Web Developer </span> , have
        experience in{" "}
        <span style={{ fontWeight: "700" }}>
          Html, Css, Bootstrap, Javascript and React js{" "}
        </span>{" "}
        as a Modern Library for making single page applications. like
        <span>
          <a
            href="https://project_react_expense_tracker_sibteali.surge.sh/"
            style={{
              color: "inherit",
              fontWeight: "700",
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
          >
            {" "}
            Expense Tracker App
          </a>{" "}
        </span>
        and{" "}
        <span>
          <a
            href="https://sibteali786.github.io/Covid19_Tracker_App_By_BootCamp/"
            style={{
              color: "inherit",
              fontWeight: "700",
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
          >
            {" "}
            Covid-19 Tracker App
          </a>{" "}
        </span>
        . He has experience in python development and have developed a
        <span>
          <a
            href="https://github.com/sibteali786/Python-Page-Rank"
            style={{
              color: "inherit",
              fontWeight: "700",
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
          >
            {" "}
            Page Rank Algorithm
          </a>{" "}
        </span>
        using{" "}
        <span style={{ fontWeight: "700" }}>
          {" "}
          Python , Jupyter Notebook, Matplotlib and Plotly libraries{" "}
        </span>
        . Sibteali Baqar also loves to get involved in Communities and thus is a
        part of{" "}
        <span style={{ fontWeight: "700" }}>
          {" "}
          Google Developer Club and a Deputy Director for Graphics Designing of
          Tarteel ( A literature Society in EME,NUST ).{" "}
        </span>
      </Typography>
    </div>
  );
}

export default About;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    media: {
      width: "20%",
      margin: "0 5% 5% 0",
      borderRadius: "50%",
    },
    muiRoot: {
      color: "inherit",
    },
    iconAnim: {
      transition: "0.2s ease-in",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  };
});
