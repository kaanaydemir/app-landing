import 'react-slideshow-image/dist/styles.css'
import Slider from "./Slider";
import AppDescription from "./AppDescription";
import AppLinks from "./AppLinks";
import AppHeader from "./AppHeader";
import {useEffect, useState} from "react";
import {apps} from "../data";

export default function AppInfo({index}) {

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(apps[index]);
  }, [index]);

  if(!data) return (<div>Loading...</div>);

  return (
    <>
      <div className={"flex-container flex gap-10"}>
        <div className="slider-container">
          <Slider slideImages={data.images}/>
        </div>
        <div>
          <AppHeader icon={data.icon} name={data.name}/>
          <AppLinks ios={data.appStoreUrl} android={data.googlePlayUrl}/>
          <AppDescription descHeader={data.description} descDetail={data.descriptionDetail}/>
        </div>
      </div>
    </>
  );
}