import Image from "next/image";

import * as React from "react";

// fonts
import { rowdies } from "../app/fonts";

interface PrizeItemProps {
  item: string;
  description: string;
  pic: string;
}

export default function PrizeItem(params: PrizeItemProps) {
  return (
    <div className="bg-white text-black shadow-lg hover:shadow-xl hover:rotate-1 border-[1px] rounded-lg w-[200px] max-w-[30vw] flex-grow flex flex-col hover:scale-105 duration-300">
      <div className="p-4">
        <Image
          src={"/pin.png"}
          alt={""}
          width={30}
          height={30}
          className="absolute translate-x-[175px] translate-y-[-100%] z-1"
        ></Image>
        <Image
          src={params.pic}
          alt={params.description}
          width={150}
          height={150}
          className="w-full"
        ></Image>
      </div>
      <div className="flex items-center justify-between gap-4 p-4 pt-0 flex-grow">
        <div className="">
          <h5 className="text-md font-bold" style={rowdies.style}>
            {params.item}
          </h5>
          <div className="overflow-x-scroll">
            <p className="text-xs ">{params.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
