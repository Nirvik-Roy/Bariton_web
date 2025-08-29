import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ITConsultingContent from "../components/ITConsulting/ITConsultingContent";
import Footer from "../components/Layouts/Footer";

export default function ITConsulting() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hire pre-vetted SAP, Java, IoT, and DevOps professionals through flexible contracts or remote engagement models. Trusted partner for technical staffing and IT strategy."
        ></meta>
      </Head>

      <NavbarTwo />

      <PageBanner
        pageTitle="IT Consulting & Staff Augmentation Services | SAP, Dev, IoT Experts"
        homePageUrl="/"
        homePageText="Home"
        activePageText="IT Consulting"
        bgImg="/images/page-title-bg1.jpg"
      />

      <ITConsultingContent />

      <Footer />
    </>
  );
}
