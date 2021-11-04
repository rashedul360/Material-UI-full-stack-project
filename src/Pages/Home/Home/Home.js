import React from "react";
import AppienmentBanner from "../../AppienmentBanner/AppienmentBanner";
import Banner from "../../Banner/Banner";
import ExeptionalCare from "../../ExeptionalCare/ExeptionalCare";
import PatientsTestemonials from "../../PatientsTestemonial/PatientsTestemonials";
import ServiceProvide from "../ServiceProvide/ServiceProvide";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServiceProvide></ServiceProvide>
      <ExeptionalCare></ExeptionalCare>
      <AppienmentBanner></AppienmentBanner>
      <PatientsTestemonials></PatientsTestemonials>
    </div>
  );
};

export default Home;
