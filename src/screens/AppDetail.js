import React, {useEffect, useState} from 'react';
import AppInfo from "../components/AppInfo";
import {useParams} from "react-router-dom";
import {apps} from "../data";
import OtherAppItem from "../components/OtherAppItem";
import OtherApps from "../components/OtherApps";

function AppDetail(props) {
  const {appName} = useParams();
  const [app, setApp] = useState(null);
  const [otherApp, setOtherApp] = useState([]);

  useEffect(() => {
    const currentApp = apps.find(app => app.appName === appName);
    setApp(currentApp);
    setOtherApp(apps);
    document.title = `${currentApp.name} | tuwenti.com `;

  }, [app, appName]);

  if (!app) return (<div>Loading...</div>);

  return (
    <div className={"justify-center items-center flex flex-col gap-14"}>
      <AppInfo index={app.id}/>
      <OtherApps otherApps={otherApp}/>
    </div>
  );
}

export default AppDetail;