import React, {useEffect, useState} from 'react';
import OtherApps from "../components/OtherApps";
import {apps} from "../data";
import Slider from "../components/Slider";
import HomeInfo from "../components/HomeInfo";

function Home(props) {

  const [app, setApp] = useState(null);

  useEffect(() => {
    setApp(apps);
  }, [app]);


  useEffect(() => {
    document.title = "Home | tuwenti.com";
  }, []);

  if (!app) return (<div>Loading...</div>);




  return (
    <div className="flex flex-col flex-1 mx-40 justify-center items-center">
      <HomeInfo apps={app}/>
      <OtherApps otherApps={app}/>
    </div>
  );
}

export default Home;