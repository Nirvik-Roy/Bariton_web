import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ERPContent from "../components/ERP/ERPContent";

export default function ERP() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expert SAP and Oracle ERP solutions including ABAP, BW/4HANA, Ariba, and MDG. Get reliable implementation, customization, and support for your enterprise systems."
        ></meta>
      </Head>

      <NavbarTwo />

      <PageBanner
        pageTitle="ERP Services | SAP & Oracle ERP Implementation & Support – Grue and Bleen"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ERP Services"
        bgImg="/images/page-title-bg1.jpg"
      />

      <ERPContent />

      <Footer />
    </>
  );
}
