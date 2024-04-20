import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
  return (
    <div className={"signature-container mt-10 flex justify-center items-center bottom-0 "}>
      <div>
        <div className={"flex text-white justify-center items-center font-semibold mb-20"}>
          <Link className={"ml-5 text-sm transition ease-in-out hover:scale-125 delay-150 hover:text-violet-500"} to={"/"}> Home </Link>
          <Link className={"ml-5 text-sm transition ease-in-out hover:scale-125 delay-150 hover:text-violet-500"} to={"/contact"}> Contact </Link>
        </div>
        <div>
          <p className={"text-white font-light mb-10"}>© {new Date().getFullYear()} tuwenti.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;