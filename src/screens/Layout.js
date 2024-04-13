import {Outlet} from "react-router-dom";
import Signature from "../components/Signature";
import React from "react";

export default function Layout() {

  return (
    <>
      <div id="main-content" className={"justify-center items-center flex flex-col"}>
        <h1 className={"text-center text-4xl font-bold"}>App Info</h1>
        <Signature/>
        <Outlet/>
      </div>
    </>
  );
}