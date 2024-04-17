import React, {useEffect, useState} from 'react';
import OtherApps from "../components/OtherApps";
import {useParams} from "react-router-dom";
import {apps} from "../data";

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
    <OtherApps otherApps={app} />
  );
}

export default Home;