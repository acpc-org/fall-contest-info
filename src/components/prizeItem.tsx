import Image from "next/image";

import * as React from "react"

// fonts
import { rowdies } from "../app/fonts";

interface PrizeItemProps {
    item: string,
    description: string,
    pic: string,
}

export default function PrizeItem(params: PrizeItemProps) {

    return (
      <div className="border-[1px] border-slate-200 rounded-lg w-[200px] max-w-[30vw] flex-grow group flex flex-col">
        <div className="flex items-center overflow-hidden max-h-[200px]">
            <Image src={params.pic} alt={params.description} width={200} height={200} className="w-full group-hover:scale-[1.05] duration-500"></Image>
        </div>
        <div className="bg-slate-950 rounded-br-lg rounded-bl-lg flex items-center justify-between gap-4 p-4 border-slate-400 border-t-[1px] flex-grow">
            <div className="text-lg font-bold">
                3x
            </div>
            <div className="">
                <h5 className="text-md font-bold" style={ rowdies.style }>
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
  