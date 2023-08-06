import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./Footer/Footer";
import MobileNav from "./movilenav/MovileNav";
const Layout = ({ children }) => {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Navbar />
      <div className="layout">
        <MobileNav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
