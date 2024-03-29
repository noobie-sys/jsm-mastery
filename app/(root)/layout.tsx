import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import '../globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div suppressHydrationWarning=
    {true}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
