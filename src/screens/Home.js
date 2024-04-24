import React, {useEffect, useState} from 'react';
import OtherApps from "../components/OtherApps";
import {apps} from "../data";
import Slider from "../components/Slider";

function Home(props) {

  const [app, setApp] = useState(null);
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    setApp(apps);
    const initialSlideImages = apps.map(app => {
      return {
        url: app.images[0].url,
      };
    });
    setSlideImages(initialSlideImages);
  }, [app]);


  useEffect(() => {
    document.title = "Home | tuwenti.com";
  }, []);

  if (!app) return (<div>Loading...</div>);

  if(!slideImages) return (<div>Loading...</div>);


  return (
    <div className="flex flex-col flex-1 mx-40 justify-center items-center">
      <div className={"flex justify-center"}>
        <div className={"hidden sm:block"}><Slider slideImages={slideImages}/></div>
        <div className={"text-center sm:text-left text-white sm:ml-20 ml-0 w-full sm:w-2/6"}>
          <h1 className={"font-bold text-5xl kanit-bold"}>Tuwenti.com</h1>
          <p className={"my-4 kanit-semibold"}>Elevating Horizons, Building Dreams</p>
          <section className={"kanit-extralight text-sm text-left space-y-2 text-stone-200"}>
            <p>At tuwenti, we pride ourselves on developing applications that simplify life's complexities—whether it's
              document transformation challenges, latest earthquake tracking, or ensuring personal safety.</p>
            <p>Our focus is on delivering top-notch solutions to problems in our daily life's.</p>
            <p>Feel free to explore our apps. Should you have any inquiries or
              need assistance, please don't hesitate to use the 'Contact' link at the bottom of the page.</p>
          </section>
        </div>
      </div>

      <OtherApps otherApps={app}/>
    </div>
  );
}

export default Home;