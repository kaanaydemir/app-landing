import React from 'react';
import {Link} from "react-router-dom";

function FooterLinks({location}) {

  let appName = location.pathname.split('/')[2];

  if(appName === undefined) {
    appName = 'tuwenti';
  }

  return (
    <div className={"flex  min-w-96 text-white justify-center items-center font-semibold mb-20"}>
      <Link className={"ml-5 text-sm transition ease-in-out hover:scale-125 delay-150 hover:text-violet-500"}
            to={"/"}> Home </Link>
      <Link className={"ml-5 text-sm transition ease-in-out hover:scale-125 delay-150 hover:text-violet-500"}
            to={"/contact"}> Contact </Link>
      <Link className={"ml-5  text-sm transition ease-in-out hover:scale-125 delay-150 hover:text-violet-500"}
            to={"/privacy?app=" + appName}> Privacy</Link>

    </div>
  );
}

export default FooterLinks;