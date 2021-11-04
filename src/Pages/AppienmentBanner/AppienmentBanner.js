import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import doctor from "../../images/doctor.png";
import bg from "../../images/appointment-bg.png";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const appointmentBg = {
  background: `url(${bg})`,
  marginTop: "150px",
  backgroundColor: "rgba(45,58,74,0.9)",
  backgroundBlendMode: "darken",
  color: "white",
  display: "flex",
  alignItems: "center",
};
const AppienmentBanner = () => {
  return (
    <Grid container spacing={2} style={appointmentBg}>
      <Grid item xs={12} md={6}>
        <img src={doctor} alt="" style={{ width: 500, marginTop: "-130px" }} />
      </Grid>
      <Grid item xs={12} md={6} style={{ textAlign: "start" }}>
        <Box>
          <Typography variant="h6">appoinment</Typography>
          <Typography variant="h4">Make an appoinment TOday</Typography>
          <Typography variant="h6" style={{ fontWeight: "200" }} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            deleniti necessitatibus accusantium repudiandae modi velit
            blanditiis nulla quis voluptas recusandae!
          </Typography>
          <Typography>
            <Button variant="contained" sx={{ mt: 5 }}>
              Learn More
            </Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AppienmentBanner;
