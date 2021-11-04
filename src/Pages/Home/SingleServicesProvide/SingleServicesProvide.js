import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CardMedia } from "@mui/material";

const SingleServicesProvide = ({ service }) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image={service.img}
            style={{ width: "auto", height: "80px", margin: "0 auto" }}
          />
          <Typography variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleServicesProvide;
