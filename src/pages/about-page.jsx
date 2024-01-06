import React from "react";
import AboutUs from "../components/about/about-us";
import Spacer from "../components/common/spacer";
import SellingOptions from "../components/selling-options/selling-options";
import NeddHelp from "../components/help/need-help";

const AboutPage = () => {
  return (
    <>
    <AboutUs/>
    <Spacer/>
    <SellingOptions/>
    <Spacer/>
    <NeddHelp/>
    <Spacer/>
    </>
  );
};

export default AboutPage;
