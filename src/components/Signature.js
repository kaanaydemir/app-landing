import React from 'react';

function Signature(props) {
  return (
    <div className="signature-container">
      <div className={"flex justify-center w-1/2 items-center content-center gap-14"}>
        <div className={"flex justify-center items-center flex-col"}>
          <div className={"w-[20px] h-[20px] rounded-3xl bg-gradient-to-r from-blue-400 to-green-400 rotate-90"}></div>
        </div>
        <div className={"flex justify-center items-center"}>
          <p className={"text-white cedarville-cursive-regular text-3xl sm:text-xl  md:text-4xl"}>
            tuwenti.com
          </p>
        </div>
        <div>
          <div className={"w-[20px] h-[20px] rounded-3xl bg-gradient-to-r from-violet-500 to-orange-500 -rotate-45"}></div>
        </div>
      </div>
      <div className={"mt-20 mb-20"}></div>
    </div>
  );
}
export default Signature;