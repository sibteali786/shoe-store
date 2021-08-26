import React from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
function Home() {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Grid item xs={12} className="display">
        <div style={{ width: "60%" }}>
          <h1 style={{ fontSize: "3rem" }}>Welcome to Shoe Store !</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            enim soluta veritatis, vitae fuga ad illo quisquam exercitationem
            vero dolorum iusto. Modi at porro voluptatem minima iusto ipsa,
            placeat facilis?
          </p>
        </div>
        <CardMedia
          component="img"
          image={require("../images/old.jpg").default}
          src={require("../images/old.jpg").default}
        />
      </Grid>
    </div>
  );
}

export default Home;
