import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import RenewableEnergyContent from "../components/RenewableEnergy/RenewableEnergyContent";



export default function RenewableEnergy() {
  return (
    <>
      <Head>
        <meta name="description" content="Maximize sustainability with solar panel consulting, IoT-based metering, energy audits, and hybrid backup systems. Start your clean energy transformation today."/>
      </Head>

      <NavbarTwo />

      <RenewableEnergyContent
      pageTitle="Renewable Energy & Solar Consulting Services | Grue and Bleen"
      homePageUrl="/"
        homePageText="Home"
        activePageText="Renewable Energy"
        bgImg="/images/page-title-bg1.jpg"
       />

      <Footer />
    </>
  )
}