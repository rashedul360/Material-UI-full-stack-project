import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chair from "../../../src/images/chair.png";
import bg from "../../../src/images/bg.png";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
const bannerBg = {
  background: `url(${bg})`,
};
const varticleCenter = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
};
const Banner = () => {
  return (
    <div>
      <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ ...varticleCenter, textAlign: "left" }}
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h3">
              your New smile <br />
              start here
            </Typography>
            <Typography variant="h6" sx={{ my: 4, fontWeight: 200 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ipsa impedit voluptate in ipsum magnam natus illo provident esse
              reprehenderit?
            </Typography>
            <Typography>
              <Button variant="contained">Get appoinment</Button>
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} style={varticleCenter}>
            <img src={Chair} alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
