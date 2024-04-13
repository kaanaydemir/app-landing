import React from 'react';

function AppHeader({icon, name}) {
  return (
    <>
      <img src={icon} className={"justify-start w-24 rounded-3xl mb-4 app-icon"} alt="logo"/>
      <p className={"text-center-sm font-extrabold text-3xl text-white"}>{name}</p>
    </>
  );
}

export default AppHeader;