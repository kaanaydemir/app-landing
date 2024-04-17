import {Outlet} from "react-router-dom";
import Signature from "../components/Signature";
import React from "react";
import Footer from "../components/Footer";

export default function Layout() {

  return (
    <>
      <div id="main-content" className={"justify-center items-center flex flex-col"}>
        <Signature/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}