import React from "react";
import Typography from "@mui/material/Typography";
import Chair from "../../../src/images/chair.png";
import bg from "../../../src/images/bg.png";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import Calander from "../Home/Shared/Calander/Calander";
const bannerBg = {
  background: `url(${bg})`,
};
const varticleCenter = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
};
const AppoinmentHeader = ({ date, setDate }) => {
  return (
    <>
      <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ ...varticleCenter, textAlign: "left" }}
        >
          <Grid item xs={12} md={6}>
            <Calander date={date} setDate={setDate}></Calander>
          </Grid>
          <Grid item xs={12} md={6} style={varticleCenter}>
            <img src={Chair} alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AppoinmentHeader;
