import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent2 from "../../../components/Blog/BlogDetailsContent2";
import Footer from "../../../components/Layouts/Footer";

const BlogDetails = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImg="/images/page-title-bg3.jpg"
      />

      <BlogDetailsContent2 />

      <Footer />
    </>
  );
};

export default BlogDetails;
