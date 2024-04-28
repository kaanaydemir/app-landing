import React from 'react';
import {Link, useLocation} from "react-router-dom";
import FooterLinks from "./FooterLinks";

function Footer(props) {

  const location = useLocation();

  return (
    <div className={"signature-container mt-10 flex justify-center items-center bottom-0 "}>
      <div>
        <FooterLinks location={location}/>
        <div>
          <p className={"text-white font-light mb-10"}>© {new Date().getFullYear()} tuwenti.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;