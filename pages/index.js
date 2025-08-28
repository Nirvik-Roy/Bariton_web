import React from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import About from "../components/HomeOne/About";
import Services from "../components/HomeOne/Services";
import Webinar from "../components/HomeOne/Webinar";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import BlogPost from "../components/Common/BlogPost";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
    <Head>
      <meta name="description" content="Discover scalable ERP, IoT automation, custom app development, and renewable energy consulting with Grue and Bleen Technologies – trusted by enterprises and governments."></meta>
    </Head>
      <Navbar />

      <MainBanner />

      <About />

      <Services />

      <Webinar />

      <PartnerContent />
         <div style={{
          paddingBottom:'100px'
         }}></div>
      <FeedbackSlider />

      <PricingCard />

      <BlogPost />

      {/* <FreeTrialForm /> */}

      <Footer />
    </>
  );
}
