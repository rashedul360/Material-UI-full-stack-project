import React from "react";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
      <AvailableAppoinments
        date={date}
        setDate={setDate}
      ></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;
