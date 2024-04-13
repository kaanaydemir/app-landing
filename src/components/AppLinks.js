import React from 'react';

function AppLinks({ios, android}) {
  return (

    <div className={"mt-4 flex gap-4 links-container"}>
      {ios && (
        <div className={"mt-4"}>
          <a
            href={ios}>
            <img className={"w-44"} src={"../app_store.svg"} alt={"App Store"}/>
          </a>
        </div>
      )}
      {android && (
        <div className={"mt-4"}>
          <a
            href={android}>
            <img className={"w-44"} src={"../google_play.svg"} alt={"Google Play"}/>
          </a>
        </div>
      )}
    </div>
  );
}

export default AppLinks;