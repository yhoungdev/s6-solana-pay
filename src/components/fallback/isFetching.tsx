/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const IsFetching = () => {
  return (
    <div
      className="w-full  flex items-center justify-center
        h-[50vh]"
    >
      <div className="flex items-center flex-col gap-3">
        <span className="loader"></span>

        <div>
          <center>
            <h3>Wait, while data is loading</h3>
          </center>
        </div>
      </div>
    </div>
  );
};

export default IsFetching;
