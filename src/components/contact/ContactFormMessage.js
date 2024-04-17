import React from 'react';

function ContactFormMessage({message,isError=false}) {

  let bgColor = "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500";

  if(isError){
    bgColor = "bg-gradient-to-r from-red-200 via-red-400 to-red-500";
  }

  const className = `absolute mb-[100px] flex justify-center w-full h-14 top-0 left-0 p-4 text-blue-800 ${bgColor}`;

  return (
    <div className="error-message-wrapper mb-4"> {/* Add margin bottom */}
      <div
        className={className}>
        <div className="flex ms-3 text-md font-bold justify-center items-center ">
          <p className={"text-black"}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactFormMessage;