import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import BookingModal from "./BookingModal/BookingModal";

const AvailableAppoinment = ({ date, booking }) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const openBookingModal = () => setOpenBooking(true);
  const closeBookingModal = () => setOpenBooking(false);
  const { name, time, space } = booking;
  return (
    <>
      {/* <Container> */}
      <Grid item xs={12} sm={6} md={4}>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minWidth: 300, p: 2, m: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>

              <Typography variant="h6" component="div">
                {time}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {space} SPACES AVAILABLE
              </Typography>
            </CardContent>
            <Button onClick={openBookingModal} variant="contained">
              Book Now
            </Button>
          </Card>
        </Grid>
      </Grid>
      {/* </Container> */}
      <BookingModal
        openBooking={openBooking}
        setOpenBooking={setOpenBooking}
        date={date}
        closeBookingModal={closeBookingModal}
        openBookingModal={openBookingModal}
        booking={booking}
      ></BookingModal>
    </>
  );
};

export default AvailableAppoinment;
