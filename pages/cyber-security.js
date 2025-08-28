import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CyberSecurityContent from "../components/CyberSecurity/CyberSecurityContent";
import Footer from "../components/Layouts/Footer";




export default function CyberSecurity() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
      pageTitle="Cyber Security Services | ICS, VAPT, Audit & Forensics – Grue and Bleen"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cyber Security"
        bgImg="/images/page-title-bg1.jpg"
       />

       <CyberSecurityContent />

       <Footer />
    </>
  )
}