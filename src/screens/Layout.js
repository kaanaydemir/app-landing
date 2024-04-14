import {Link, Outlet} from "react-router-dom";
import Signature from "../components/Signature";
import React from "react";

export default function Layout() {

  return (
    <>
      <div id="main-content" className={"justify-center items-center flex flex-col"}>
        <Link to={"/"}>
          <Signature/>
        </Link>
        <Outlet/>
      </div>
    </>
  );
}