import React from 'react';

function Signature(props) {
  return (
    <div className="signature-container">
      <div className={"flex justify-center w-1/2 items-center content-center gap-14"}>
        <div>
          <div
            className={"absolute w-[70px] h-2 rounded-3xl bg-gradient-to-r from-blue-400 to-green-400 rotate-45"}></div>
          <div
            className={"absolute w-[70px] h-2 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 -rotate-45"}></div>
        </div>
        <div className={"ml-20"}>
          <p className={"text-white cedarville-cursive-regular text-xl sm:text-xl  md:text-4xl"}>
            tuwenti.com
          </p>
        </div>
        <div>
          <div
            className={"absolute w-[70px] h-2 rounded-3xl bg-gradient-to-r from-red-200 to-yellow-500 rotate-45"}></div>
          <div
            className={"absolute w-[70px] h-2 rounded-3xl bg-gradient-to-r from-violet-500 to-orange-500 -rotate-45"}></div>
        </div>
      </div>
      <div className={"mt-20"}></div>
    </div>
  );
}

export default Signature;