import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import IoTContent from "../components/IoT/IoTContent";

export default function IoT() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Deploy smart infrastructure with IoT-driven waste collection, BMS, energy metering, and visitor management systems. Scalable and secure automation solutions."
        ></meta>
      </Head>

      <NavbarTwo />

      <PageBanner
        pageTitle="IoT & Smart Automation Solutions | Waste, Energy & Security Systems"
        homePageUrl="/"
        homePageText="Home"
        activePageText="IoT & Smart Automation Solutions"
        bgImg="/images/page-title-bg1.jpg"
      />

      <IoTContent />

      <Footer />
    </>
  );
}
