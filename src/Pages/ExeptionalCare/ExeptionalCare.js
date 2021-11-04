import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import care from "../../images/treatment.png";
import { Button, CardMedia, Container, Typography } from "@mui/material";
const ExeptionalCare = () => {
  return (
    <Container sx={{ mt: 15, mb: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardMedia component="img" image={care} />
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="h4"
            style={{ textAlign: "start", width: "100%" }}
            sx={{ m: 4 }}
          >
            Exeptional Dental Care, on YOur Teams
          </Typography>
          <Typography
            variant="h6"
            style={{ textAlign: "start", fontWeight: "300", width: "90%" }}
            sx={{ m: 5 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia nemo
            unde quaerat tempore porro? Eligendi provident perspiciatis mollitia
            dignissimos, quaerat laudantium nostrum nesciunt sapiente,
            voluptatem unde architecto id aliquam minus natus? Delectus, illum.
            Reprehenderit commodi nihil saepe architecto! Corporis dolorum
            ducimus nulla quia, unde est pariatur labore atque animi sunt. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            architecto. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nulla aliquam enim voluptate nam dolores? Cumque unde eveniet
            obcaecati id minima!
          </Typography>
          <Button
            style={{ display: "flex", alignItems: "flex-start" }}
            sx={{ m: 5 }}
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExeptionalCare;
