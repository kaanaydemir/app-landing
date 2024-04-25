import React, {useEffect, useState} from 'react';
import {get} from "../util/http";


function Privacy(props) {

  const [html, setHtml] = useState()

  useEffect(() => {
    const fetchPrivacy = async () => {
      const response = await get({url: 'https://tuwenti-documents.s3.eu-central-1.amazonaws.com/deprem-bildirimleri-turkiye.html'});
      setHtml(response);
    }
    fetchPrivacy();
  }, []);
  return (
    <div className={"text-black bg-white p-5"} dangerouslySetInnerHTML={{__html: html}}/>
  );
}

export default Privacy;