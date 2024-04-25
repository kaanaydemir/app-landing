import React, {useEffect, useState} from 'react';
import {get} from "../util/http";
import styles from './TermsOfService.module.css'

function TermsOfService(props) {
  const [html, setHtml] = useState()


  useEffect(() => {
    const fetchPrivacy = async () => {
      const response = await get({url: 'https://tuwenti-documents.s3.eu-central-1.amazonaws.com/terms-and-conditions.html'});
      setHtml(response);
    }
    fetchPrivacy();
  }, []);
  return (
    <div className={"p-2 bg-white"}>
      <div className={styles.container} dangerouslySetInnerHTML={{__html: html}}/>
    </div>

  );
}

export default TermsOfService;