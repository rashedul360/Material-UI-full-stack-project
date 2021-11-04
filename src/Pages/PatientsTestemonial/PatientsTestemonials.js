import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import PatientsTestemonial from "./PatientsTestemonial";
import { Box } from "@mui/system";

const testimonials = [
  {
    name: "rashedul ",
    time: "November 11, 2020",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem quaerat possimus fugit! Possimus magnam aspernatur suscipit, qui nemo placeat voluptatem itaque. Temporibus exercitationem nostrum eum culpa. Tempore minima repellat nostrum inventore deserunt eaque architecto repellendus numquam nemo eveniet iusto atque, quo laudantium, porro dolores itaque molestiae blanditiis sunt possimus excepturi nam?",
    location: "UK",
    img: "https://i.ibb.co/tqqxWRq/people-1.png",
  },
  {
    name: "islam",
    time: "July 14, 2021",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem quaerat possimus fugit! Possimus magnam aspernatur suscipit, qui nemo placeat voluptatem itaque. Temporibus exercitationem nostrum eum culpa. Tempore minima repellat nostrum inventore deserunt eaque architecto repellendus numquam nemo eveniet iusto atque, quo laudantium, porro dolores itaque molestiae blanditiis sunt possimus excepturi nam?",
    location: "Bangladesh",
    img: "https://i.ibb.co/HV7SjfB/people-2.png",
  },
  {
    name: "shihab",
    time: "September 14, 2016",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem quaerat possimus fugit! Possimus magnam aspernatur suscipit, qui nemo placeat voluptatem itaque. Temporibus exercitationem nostrum eum culpa. Tempore minima repellat nostrum inventore deserunt eaque architecto repellendus numquam nemo eveniet iusto atque, quo laudantium, porro dolores itaque molestiae blanditiis sunt possimus excepturi nam?",
    location: "Canada",
    img: "https://i.ibb.co/dLNDDy8/people-3.png",
  },
];
const PatientsTestemonials = () => {
  return (
    <Container sx={{ mt: 15 }}>
      <Box style={{ textAlign: "start" }}>
        <Typography variant="h6">TESTEMONIAL</Typography>
        <Typography variant="h2">What's Our Patients Says</Typography>
      </Box>
      <Grid container spacing={3}>
        {testimonials.map((testimonial) => (
          <PatientsTestemonial testimonial={testimonial}></PatientsTestemonial>
        ))}
      </Grid>
    </Container>
  );
};

export default PatientsTestemonials;
