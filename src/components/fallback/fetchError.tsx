/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const FetchError = ({ retry }: { retry?: () => void }) => {
  return (
    <div
      className="w-full  flex items-center justify-center
        h-[50vh]"
    >
      <div className="flex items-center flex-col gap-3">
        <img
          src={"https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Abby"}
          alt="Error Image"
          width={100}
          height={100}
        />

        <div>
          <center>
            <h3>Sorry Something went wrong</h3>
          </center>
          <Button className="px-[3em] mt-3" onClick={retry}>
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FetchError;
