import React from "react";

import { CardMedia, Container, Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const PatientsTestemonial = ({ testimonial }) => {
  const { name, desc, location, time, img } = testimonial;

  return (
    <Grid item sm={12} md={4} sx={{ mt: 5 }}>
      <Card sx={{ minWidth: 27 }} style={{ border: "1px solid #ddd" }}>
        <CardContent>
          <Typography variant="body2" style={{ textAlign: "start" }}>
            {desc}
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }} sx={{ mt: 2 }}>
            <Paper elevation={0} sx={{ m: 1 }}>
              <CardMedia
                component="img"
                image={img}
                style={{ width: "50px" }}
              />
            </Paper>
            <Paper elevation={0}>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  lineHeight: "10px",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "200",
                }}
              >
                {location}
              </Typography>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PatientsTestemonial;
