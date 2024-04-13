import React from 'react';
import OtherAppItem from "./OtherAppItem";

function OtherApps({otherApps}) {
  return (
    <div className="flex items-center m-8 justify-center">
      <div className="grid grid-cols-2 gap-14 justify-center items-center">
        {otherApps.map((app, index) => (
          <OtherAppItem key={index} index={index} app={app}/>
        ))}
      </div>
    </div>
  );
}

export default OtherApps;