"use client"
 
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


//icons
import { LuPartyPopper } from "react-icons/lu";
import { IoSadOutline } from "react-icons/io5";


interface Item {
    option: string,
    value: string
}

interface AllowedProps {
    items: Item[];
    notAllowed: string;
    allowedMessage: string;
    notAllowedMessage: string;
    panelPosition: string;
    buttonName: string;
}

interface isAllowedProps {
    chosen: string;
    message: string;
}

function IsAllowed(params: isAllowedProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
                You chose: 
                <div className="bg-slate-800 rounded-xl py-1 px-2">
                    {params.chosen}
                </div>
            </div>
            <div className="flex gap-2 items-center border-[1px] mt-1 p-2 rounded-lg">
                <LuPartyPopper></LuPartyPopper>
                <p>{params.message}</p>
            </div>
        </div>
    )
}

function IsNotAllowed(params: isAllowedProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
                You chose: 
                <div className="bg-slate-800 rounded-xl py-1 px-2">
                    {params.chosen}
                </div>
            </div>
            <div className="flex gap-2 items-center border-[1px] mt-1 p-2 rounded-lg">
                <IoSadOutline></IoSadOutline>
                <p>{params.message}</p>
            </div>
        </div>
    )
}

export default function Allowed(params: AllowedProps) {

    const [chosen, setChosen] = React.useState("none")

    return (
      <div className="flex flex-col gap-4">
        <div className="">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">{params.buttonName}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 max-h-[50vh] overflow-y-scroll">
                    <DropdownMenuLabel>{params.panelPosition}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={chosen} onValueChange={setChosen}>
                        <DropdownMenuRadioItem value="none" >{params.notAllowed}</DropdownMenuRadioItem>
                        {params.items.map((item) => (
                            <DropdownMenuRadioItem key={item.option} value={item.value}>{item.option}</DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="p-2">
            {chosen === "none" ? <IsNotAllowed chosen={chosen} message={params.notAllowedMessage}></IsNotAllowed> : <IsAllowed chosen={chosen}  message={params.allowedMessage}></IsAllowed>}
        </div>
      </div>
    );
  }
  