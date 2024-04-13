import React from 'react';
import {Link} from "react-router-dom";

function OtherAppItem({index,app}) {
  return (
    <Link to={`/apps/${app.appName}`}>
    <div key={index}
         className="w-80 transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 flex items-center bg-white bg-opacity-10 text-white rounded-2xl h-24 hover:bg-white hover:text-black">
      <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-2xl m-5 hover:text-black"/>
      <div className={"mr-5 justify-center items-center text-sm"}>
        <p className="font-bold font-sans">{app.name}</p>
        <div className={"hover:text-black flex flex-row justify-center items-center gap-2 py-2"}>
          {app.appStoreUrl && app.googlePlayUrl && (
            <>
              <p className={"font-bold text-stone-400"}>iOS</p>
              <p className={"font-bold text-stone-400"}>|</p>
              <p className={"font-bold text-stone-400"}>Android</p>
            </>
          )}
          {app.appStoreUrl && !app.googlePlayUrl && (
            <>
              <p className={"font-bold text-stone-400"}>Download For iOS</p>
            </>
          )}
          {!app.appStoreUrl && app.googlePlayUrl && (
            <>
              <p className={"font-bold text-stone-400"}>Download For Android</p>
            </>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
}

export default OtherAppItem;