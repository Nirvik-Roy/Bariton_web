import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import { useRouter } from "next/router";

const ServiceDetails = () => {
  const router = useRouter()
  const {index} = router.query
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImg="/images/page-title-bg2.jpg"
      />

      <ServiceDetailsContent id={index} />

      <Footer />
    </>
  );
};

export default ServiceDetails;
