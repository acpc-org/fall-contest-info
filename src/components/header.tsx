"use client"
 
import Image from "next/image";
import * as React from "react"
import Link from "next/link"
 
import Countdown from "./countdown"

// icons
import { RxHamburgerMenu } from "react-icons/rx";


import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tips",
    href: "/tips",
    description:
      "Look this if you're struggling during the contest.",
  },
  // {
  //   title: "FAQ",
  //   href: "/#faq",
  //   description:
  //     "Frequently Asked Questions.",
  // },
  {
    title: "Practice Problem",
    href: "/practice",
    description: "A taste of the contest.",
  },
  {
    title: "Contest Specifics",
    href: "/specifics",
    description:
      "Details about the contest, like the rules and the format.",
  },
  {
    title: "Sponsors",
    href: "/#sponsors",
    description:
      "Yay thank you for the money.",
  },
]

function DropDownMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Main Items</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/signup"
                    >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Sign Up Now
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Deadline is April 13th at 11:59 PM
                        </p>
                    </a>
                    </NavigationMenuLink>
                </li>
                <div className="sm:hidden">
                  <ListItem href="/#" title="Home">
                    Bring it to the top
                  </ListItem>
                </div>
                <ListItem href="/#overview" title="Overview">
                  Details about the event
                </ListItem>
                <ListItem href="/#schedule" title="Schedule">
                  When things are happening
                </ListItem>
                <ListItem href="/#prizes" title="Prizes">
                  What you can win
                </ListItem>
              </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Extras</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                    <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                    </ListItem>
                ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between fixed z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-lg p-4 border-b-[1px] border-slate-500">
        <div className="sm:hidden group hover:cursor-pointer hover:bg-slate-900 p-3 rounded-lg ">
          <RxHamburgerMenu></RxHamburgerMenu>
          <div className="hidden sm:block group-hover:block group-hover:absolute group-hover:top-4 group-hover:left-2 bg-slate-950 rounded-lg">
            <DropDownMenu></DropDownMenu>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <a href="/#" className="">
            <Image
              src="/acpc-logo.svg"
              alt=""
              width={35}
              height={35}
            >  
            </Image>
          </a>
          
          <DropDownMenu></DropDownMenu>
        </div>
        <div className="flex items-center gap-4">
          <Countdown></Countdown>
          <a className="glow py-2 px-4 rounded-lg hover:bg-[rgba(44,53,76,0.5)]" href="/signup">
            Sign Up
          </a>
        </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    )
})
ListItem.displayName = "ListItem"