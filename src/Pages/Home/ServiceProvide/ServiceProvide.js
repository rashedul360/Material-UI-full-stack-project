import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import SingleServicesProvide from "../SingleServicesProvide/SingleServicesProvide";
import { Typography } from "@mui/material";
const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: whitening,
  },
];

const ServiceProvide = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "success.main", m: 2 }}
      >
        Our Services
      </Typography>
      <Typography variant="h4" component="div" sx={{ m: 2 }}>
        Service We Provide
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => (
          <SingleServicesProvide
            key={service.name}
            service={service}
          ></SingleServicesProvide>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceProvide;
