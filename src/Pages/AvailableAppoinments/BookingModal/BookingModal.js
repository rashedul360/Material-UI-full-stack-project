import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import "./bookingModal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, closeBookingModal, booking, date }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { name, space, time } = booking;
  return (
    <div>
      <Modal
        open={openBooking}
        onClose={closeBookingModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {space} Are available Now! on {date.toDateString()}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("serviceName", { required: true })}
              value={name}
              readOnly
            />
            <input
              {...register("firstName", { required: true })}
              placeholder="first Name"
            />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
            />
            <input
              type="number"
              {...register("age", { required: true })}
              placeholder="Your Age"
            />
            <input
              type="text"
              {...register("problem", { required: true })}
              placeholder="Problem Summary"
            />
            <input
              type="text"
              {...register("date", { required: true })}
              placeholder="data"
              value={date.toDateString()}
              readOnly
            />
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default BookingModal;
