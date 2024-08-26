"use client"

import Image from "next/image";

import React, { useState } from "react";

// icons
import { RxGlobe, RxInstagramLogo, RxDiscordLogo, RxHeart } from "react-icons/rx";

// socials
const socials = [
  {
    name: "Website",
    icon: <RxGlobe></RxGlobe>,
    link: "https://tamuacpc.com/"
  },
  {
    name: "Instagram",
    icon: <RxInstagramLogo></RxInstagramLogo>,
    link: "https://www.instagram.com/aggiecompetitiveprogramming/"
  },
  {
    name: "Discord",
    icon: <RxDiscordLogo></RxDiscordLogo>,
    link: "https://tx.ag/acpcdc"
  }
]

export default function Footer() {
    return (
        <footer className="flex justify-between w-[100vw] p-8 border-t-[1px] bg-gradient-to-r from-neutral-900 from-10% via-slate-950 via-30% to-slate-950 border-slate-500">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                    <p className="text-white">Made with</p>
                    <RxHeart className=""></RxHeart>
                    <p>by the 2024 ACPC Officers</p>
                </div>
                <Image src="/acpc-logo.svg" alt="" width={100} height={100}></Image>
            </div>
            <div className="flex  flex-col items-end">
                {socials.map((social) => (
                    <a href={social.link} key={social.name} className="flex items-center gap-2 text-white">
                        {social.icon}
                        <p>{social.name}</p>
                    </a>
                ))}
            </div>
        </footer>
    );
  }
  