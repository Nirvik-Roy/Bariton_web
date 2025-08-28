import React from "react";
import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Services from "../components/HomeOne/Services";
import Team from "../components/Common/Team";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";

export default function AboutUs() {
  return (
    <>
    <Head>
        
        <meta
          name="description"
          content="Explore Grue and Bleen’s specialized cyber security services: ICS/SCADA security, penetration testing, audits, forensics, and awareness training tailored for industries and enterprises."
        />
        <meta name="keywords" content="Cyber Security, ICS Security, SCADA, VAPT, Penetration Testing, Incident Response, Awareness Training, Grue and Bleen" />
      </Head>
      <NavbarTwo />

      


      <PageBanner
        pageTitle="About Us | Grue and Bleen Technologies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImg="/images/page-title-bg1.jpg"
      />

      <AboutContact />

      <Services />

      <Team />

      <PartnerContent />

      <FeedbackSlider />

      <PricingCard />

      {/* <FreeTrialForm /> */}

      <Footer />
    </>
  );
}
