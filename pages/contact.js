import React from "react";
import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Layouts/Footer";

export default function Contact() {
  return (
    <>
    <Head>
      <meta name="description" content="Have a project or question? Contact Grue and Bleen for consultations on ERP, IoT, custom software, and renewable energy solutions."/>
    </Head>
      <NavbarTwo />

      <PageBanner
        pageTitle="Contact Us | Grue and Bleen Technologies Pvt. Ltd."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImg="/images/page-title-bg3.jpg"
      />

      <ContactFormContent />

      <Footer />
    </>
  );
}
