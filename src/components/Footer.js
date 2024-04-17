import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
  return (
    <div className={"signature-container mt-10 flex justify-center items-center bottom-0 "}>
      <div>
        <div className={"flex text-white justify-center items-center font-semibold mb-20"}>
          <Link className={"mr-5"} to={"/"}> Home </Link>
          <Link className={"ml-5"} to={"/contact"}> Contact </Link>
        </div>
        <div>
          <p className={"text-white font-light mb-10"}>© {new Date().getFullYear()} tuwenti.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;