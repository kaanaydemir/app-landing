import React from 'react';

function AppDescription({descHeader, descDetail}) {
  return (
    <div className={"text-stone-300 w-96 text-sm flex flex-col gap-3 "}>
      <p className={"mt-4"}>
        {descHeader}
      </p>
      {descDetail.map((item, index) => (
        <p key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default AppDescription;