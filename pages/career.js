import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CareerContent from "../components/Career/CareerContent";
import Footer from "../components/Layouts/Footer";

export default function Career() {
  return (
    <>
      <Head>
       <meta name="description" content="Join Grue and Bleen Technologies and work on cutting-edge projects in SAP, IoT, app development, and more. Remote, hybrid, and internship opportunities available." />

      </Head>

      <NavbarTwo />


      <PageBanner
      pageTitle="Careers at Grue and Bleen | Tech Jobs & Internships in ERP, IoT, Dev"
      homePageUrl="/"
        homePageText="Home"
        activePageText="Career"
        bgImg="/images/page-title-bg1.jpg"
       />

       <CareerContent />

       <Footer />
    </>
  )
}