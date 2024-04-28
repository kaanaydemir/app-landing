import React, {useEffect, useState} from 'react';
import {get} from "../util/http";
import {useLocation} from "react-router-dom";
import {apps} from "../data";
import styles from './Privacy.module.css'


function Privacy(props) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentApp = query.get('app'); // Assume you're looking for 'myParam'
  const [html, setHtml] = useState();


  useEffect(() => {
    const fetchPrivacy = async () => {
      let app = apps.find(app => app.appName === currentApp);

      if(app === undefined) {
        app = apps[0];
      }

      const response = await get({url: app.privacyPolicyUrl});
      setHtml(response);
    }
    fetchPrivacy();

    document.title = `Privacy Policy | tuwenti.com`;

  }, [location, currentApp]);
  return (
    <div className={"text-black bg-white p-5"}>
      <div className={styles.container} dangerouslySetInnerHTML={{__html: html}}/>
    </div>

  );
}

export default Privacy;