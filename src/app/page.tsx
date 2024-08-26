import Image from "next/image";

// components
import Header from "@/components/header";
import Magnifier from "@/components/magnifier";
import Allowed from "@/components/allowed";
import PrizeItem from "@/components/prizeItem";
import Footer from "@/components/footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// fonts
import { rowdies } from "./fonts";

// icons
import { RxSewingPinFilled, RxClock, RxFace } from "react-icons/rx";

// lists
const schedule = [
  {
    time: "12:00 PM - 1:00 PM",
    event: "Check-In / Pre Contest",
  },
  {
    time: "1:00 PM - 6:00 PM",
    event: "Contest",
  },
  {
    time: "6:00 PM - 6:15 PM",
    event: "Pizza / Break",
  },
  {
    time: "6:15 PM - 7:00 PM",
    event: "Prizes & Solutions",
  },
];

const sponsors = [
  {
    name: "Bellflight",
    logo: "/bellflight.png",
    link: "https://www.bellflight.com/",
  },
  {
    name: "Roblox",
    logo: "/roblox.png",
    link: "https://www.roblox.com/",
  },
  {
    name: "Optiver",
    logo: "/optiver.png",
    link: "https://www.optiver.com/",
  },
  {
    name: "Chevron",
    logo: "/chevron.png",
    link: "https://www.chevron.com/",
  },
  {
    name: "Texas A&M Good Bull Fund",
    logo: "/goodbull.png",
    link: "https://getinvolved.tamu.edu/org/goodbull/positions/483",
  },
];

const allowedLanguages = [
  { option: "GNU C11", value: "c.gcc11" },
  { option: "C++14 (GCC 6-32)", value: "cpp.g++14" },
  { option: "C++17 (GCC 7-32)", value: "cpp.g++17" },
  { option: "C++20 (GCC 13-64)", value: "cpp.gcc13-64-winlibs-g++20" },
  { option: "C# 8", value: "csharp.dotnet-core" },
  { option: "C# 10", value: "csharp.dotnet-sdk-6" },
  { option: "Mono C#", value: "csharp.mono" },
  { option: "D", value: "d" },
  { option: "Go", value: "go" },
  { option: "Haskell", value: "haskell.ghc" },
  { option: "Java 21", value: "java21" },
  { option: "Java 8", value: "java8" },
  { option: "Kotlin 1.7", value: "kotlin17" },
  { option: "Kotlin 1.9", value: "kotlin19" },
  { option: "OCaml", value: "ocaml" },
  { option: "Delphi", value: "pas.dpr" },
  { option: "FPC", value: "pas.fpc" },
  { option: "PascalABC.NET", value: "pas.pascalabc" },
  { option: "Perl", value: "perl.5" },
  { option: "PHP", value: "php.5" },
  { option: "Python 2", value: "python.2" },
  { option: "Python 3", value: "python.3" },
  { option: "PyPy 2", value: "python.pypy2" },
  { option: "PyPy 3", value: "python.pypy3" },
  { option: "PyPy 3-64", value: "python.pypy3-64" },
  { option: "Ruby 3", value: "ruby.3" },
  { option: "Rust 2021", value: "rust.2021" },
  { option: "Scala", value: "scala" },
  { option: "JavaScript", value: "v8.3" },
  { option: "Node.js", value: "v8.nodejs" },
  { option: "Tcl", value: "tcl" },
  { option: "Io", value: "io" },
  { option: "Pike", value: "pike" },
  { option: "Befunge", value: "befungee" },
  { option: "Cobol", value: "opencobol" },
  { option: "Factor", value: "factor" },
  { option: "Secret_171", value: "intercal" },
  { option: "Roco", value: "roco" },
  { option: "Ada", value: "ada" },
  { option: "Mysterious Language", value: "fortran.g95" },
  { option: "FALSE", value: "false" },
  { option: "Picat", value: "picat" },
  { option: "GNU C++11 ZIP", value: "cpp-zip.g++11" },
  { option: "Java 8 ZIP", value: "java8-zip" },
  { option: "J", value: "j" },
  { option: "Q#", value: "qsharp" },
  { option: "Text", value: "text" },
  { option: "UnknownX", value: "arnoldc" },
  { option: "Secret 2021", value: "seriously" },
];

const mainPrizes = [
  {
    item: "Switch Lite",
    description:
      "The Nintendo Switch Lite is a compact alternative to the standard Nintendo Switch, making it a perfect travel companion for any gamer on the go.",
    pic: "/switch_lite.png",
  },
  {
    item: "Razer Gaming Keyboard",
    description:
      "Razer Huntsman Mini 60% Gaming Keyboard; Fast Keyboard Switches, Clicky Optical Switches, Chroma RGB Lighting, PBT Keycaps, Onboard Memory, in Classic Black.",
    pic: "/razer_gaming_keyboard.png",
  },
  {
    item: "HyperX Gaming Mouse",
    description:
      "The HyperX Pulsefire Haste; Ultra Lightweight, 62g, 100 Hour Battery Life, 2.4Ghz Wireless, Honeycomb Shell, Hex Design, Up to 16000 DPI, 6 Programmable Buttons, in White.",
    pic: "/hyperx_gaming_mouse.png",
  },
];

const classificationPrizes = [
  {
    item: "Mechanical Keyboard",
    description:
      "AJAZZ KA820 75% Wired RGB Hot Swap Mechanical Keyboard; with Volume Knob, Poron Foam Gasket Mounted, South Facing LED, OME Profile PBT Keycap, and Custom Linear Switch.",
    pic: "/mechanical_keyboard.png",
  },
  {
    item: "Laptop Stand",
    description:
      "A laptop stand is a device that holds a laptop in a raised position, allowing the user to view the screen at eye level. This can help reduce neck strain and improve posture.",
    pic: "/laptop_stand.png",
  },
  {
    item: "Echo Dot",
    description:
      "Amazon Echo Dot (5th Gen); has Clock, Compact smart speaker with Alexa, and enhanced LED display for at-a-glance clock, timers, weather and more, all in Glacier White ",
    pic: "/echo_dot.png",
  },
  {
    item: "Bluetooth Speaker",
    description:
      "Anker Soundcore 2 Portable Bluetooth Speaker with 12W Stereo Sound, Bluetooth 5, Bassup, IPX7 Waterproof, 24-Hour Playtime, and Wireless Stereo Pairing. A speaker for your home, the outdoors, and travel.",
    pic: "/bluetooth_speaker.png",
  },
  {
    item: "Portable Chargers",
    description:
      "Anker Magnetic Portable Charger, 5,000mAh Wireless Portable Charger with USB-C Cable, Battery Pack Only Compatible with iPhone 15/15 Plus/15 Pro/15 Pro Max, iPhone 14/13/12 Series and more.",
    pic: "/portable_charger.png",
  },
];

const mysteryPrizes = [
  {
    item: "???",
    description: "?????",
    pic: "/unknown.png",
  },
  {
    item: "???",
    description: "?????",
    pic: "/unknown.png",
  },
  {
    item: "???",
    description: "?????",
    pic: "/unknown.png",
  },
  {
    item: "???",
    description: "?????",
    pic: "/unknown.png",
  },
  {
    item: "???",
    description: "?????",
    pic: "/unknown.png",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-20 px-4 sm:px-12 bg-blue-300">
      <Header></Header>
      <div className="flex flex-col gap-4 items-center justify-center text-center mt-28">
        <h1
          className="text-5xl sm:text-6xl font-bold text-white uppercase"
          style={rowdies.style}
        >
          ACPC Fall Contest
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-xs sm:text-sm border-blue-950 border-[1px] rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <RxClock></RxClock>
            <p>April 14th - 1:00 PM</p>
          </div>
          <div className="text-xs sm:text-sm border-blue-950 border-[1px] rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <RxSewingPinFilled></RxSewingPinFilled>
            <p>PETR 118</p>
          </div>
          <div className="text-xs sm:text-sm border-blue-950 border-[1px] rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <RxFace></RxFace>
            <p>Food + Prizes</p>
          </div>
        </div>
        <div className="z-[0]">
          <Magnifier
            src="/dead_pineapple.png"
            magnifierHeight={100}
            magnifierWidth={100}
            zoomLevel={2}
          />
        </div>
        <p className="italic">
          Trouble&rsquo;s brewing at Fall Contest 2024… Sign up and help us
          figure out what&rsquo;s going on!
        </p>
      </div>
      <div className="w-full border-gray-700 border-[1px] rounded-lg p-8 bg-blue-200 hover:bg-blue-100 duration-500">
        <h2
          id="what"
          className="text-4xl font-bold uppercase mb-4"
          style={rowdies.style}
        >
          What is going on???
        </h2>
        <p className="mb-4">
          Welcome to the{" "}
          <a
            href="https://tamuacpc.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dashed hover:decoration-solid "
          >
            Aggie Competitive Programming Club
          </a>
          &rsquo;s Fall competitive programming contest! Here, participants work
          in groups of 3 to solve well-defined problems by writing programs in 5
          hours to test their algorithmic knowledge, programming skills, logical
          reasoning, and ability to perform under pressure.
        </p>
        <p className="mb-8">
          Compete for the chance to win prizes, enjoy free food, have fun with
          friends!
        </p>
        <a
          className="glow py-2 px-4 rounded-lg hover:bg-[rgba(88,164,245,0.5)]"
          href="/signup"
        >
          Sign Up Now
        </a>
      </div>
      <div className="w-full p-8">
        <h2
          id="overview"
          className="text-4xl font-bold uppercase"
          style={rowdies.style}
        >
          Overview
        </h2>
        <p className="mt-4 mb-8">
          Open to all majors and classifications, (almost) any language, and any
          level of experience.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col items-center justify-center gap-2 border-[1px] p-8 rounded-lg hover:px-10 hover:bg-blue-400 duration-500">
            <p className="text-8xl font-bold">5</p>
            <p className="text-xl">Hours</p>
          </div>
          <div className="flex-grow flex flex-wrap gap-4 duration-200">
            <div className="flex-grow flex items-center justify-center border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-500 duration-500">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <div className="text-2xl font-bold flex items-center gap-2">
                        <RxClock></RxClock>
                        <p>April 14th</p>
                      </div>
                      <p className="text-lg">1:00 PM - 6:00 PM</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <a href="/#schedule">See Schedule</a>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex-grow flex items-center justify-center border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-400 duration-500">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <RxSewingPinFilled></RxSewingPinFilled>
                  <p>Peterson Building</p>
                </div>
                <p className="text-lg">Room 118</p>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center text-lg font-bold border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-400 duration-500">
              All Majors and Classifications welcome
            </div>
            <div className="flex flex-col sm:flex-row flex-grow gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex-grow flex items-center justify-center h-full border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-500 duration-500">
                      <div className="flex flex-col gap-2">
                        <p className="text-4xl font-bold">$2000+ in Prizes</p>
                        <p className="text-md">also free food and glory.</p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <a href="/#schedule">See Prizes</a>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="flex-grow border-[1px] p-4 rounded-lg hover:bg-[#aad6ff] duration-500">
                <p className="text-lg font-bold mb-8">
                  C++, Java, Python, and more allowed
                </p>
                <Allowed
                  items={allowedLanguages}
                  notAllowed="None of these???"
                  allowedMessage="Yes it is! You can use it at the contest."
                  notAllowedMessage="Bruh just pick a different one."
                  buttonName="See if your language is allowed!"
                  panelPosition="Choose a Language"
                ></Allowed>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-400 duration-500">
                <p className="text-2xl font-bold">Teams of 3</p>
                <p className="text-md mt-2">
                  You can all write code at the same time.
                </p>
                <p className="text-md  mt-2">
                  Collaboration only allowed among your teammates.
                </p>
              </div>
              <div className=" border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-500 duration-500">
                <p className="text-4xl font-bold">Internet Allowed??</p>
                <p className="text-md  mt-2">
                  It is allowed to search the Internet and use code which can be
                  proved to have been published before the contest began.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-md border-[1px] p-4 rounded-lg hover:scale-[1.025] hover:bg-blue-500 duration-500">
              <div className="flex gap-4">
                <p className="text-xl font-bold">
                  Only basic knowledge of programming is required
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-md">
                    Write programs to solve well-defined algorithmic problems.
                  </p>
                  <p className="text-md">
                    Problems are of the type that help prepare you for
                    interviews and coding challenges.
                  </p>
                  <p>
                    Some problems should be solvable by all those with basic
                    prior programming knowledge -- but some problems will be
                    much tougher!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <p>See more details:</p>
          <a
            href="/specifics"
            className="p-2 border-2 border-blue-500 bg-blue-400 hover:bg-blue-500 rounded-lg"
          >
            Contest Specifics
          </a>
        </div>
      </div>
      <div className="w-full">
        <h2
          id="schedule"
          className="text-4xl font-bold uppercase"
          style={rowdies.style}
          px-8
        >
          Schedule
        </h2>
        <div className="mt-4">
          {schedule.map((event, index) => (
            <div
              key={"event" + index}
              className="flex items-center justify-between border-gray-700 border-b-[1px] p-4 hover:bg-blue-400 rounded-lg duration-500"
            >
              <p className="text-xl font-bold">{event.time}</p>
              <p className="text-lg">{event.event}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="prizes" className="w-full p-8">
        <h2 className="text-4xl font-bold uppercase" style={rowdies.style}>
          Prizes
        </h2>
        <p className="my-4">
          Enough prizes for every member of the team, totalling over $2000 in
          value! However, due to legal / organizational requirements, only Texas
          A&M teams can receive prizes.
        </p>
        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase" style={rowdies.style}>
            Main Prizes (Top 3)
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 mt-2">
            <div className="bg-blue-400 border-2 rounded-lg px-4 pb-4 pt-2 flex-grow">
              <h4 className="mb-2">Prize Pool</h4>
              <div className="flex gap-4 flex-wrap justify-between">
                {mainPrizes.map((prize, index) => (
                  <PrizeItem
                    key={"prize" + index}
                    item={prize.item}
                    description={prize.description}
                    pic={"/prizes" + prize.pic}
                  ></PrizeItem>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Prizes</h4>
              <div className="flex flex-col rounded-lg border-2 p-4 bg-sky-300">
                {["1st", "2nd", "3rd"].map((place, index) => (
                  <div
                    key={"place" + index}
                    className="border-b-2 pb-1 mb-2 group hover:border-sky-500 duration-200"
                  >
                    <h5 className="text-lg font-bold">{place} Place</h5>
                    <div className="text-md text-slate-800 group-hover:text-slate-900 duration-200">
                      <p>{place} choice from the Main Prize pool.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase" style={rowdies.style}>
            Classification Prizes
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 mt-2">
            <div className="bg-blue-400 border-2 rounded-lg px-4 pb-4 pt-2 flex-grow">
              <h4 className="mb-2">Prize Pool</h4>
              <div className="flex gap-4 flex-wrap justify-between">
                {classificationPrizes.map((prize, index) => (
                  <PrizeItem
                    key={"prize" + index}
                    item={prize.item}
                    description={prize.description}
                    pic={"/prizes" + prize.pic}
                  ></PrizeItem>
                ))}
              </div>
            </div>
            <div className="lg:w-[30vw]">
              <h4 className="text-lg font-bold mb-2 ">Prizes</h4>
              <div className="flex flex-col rounded-lg border-2 p-4 bg-indigo-400">
                {["Freshman", "Sophomore", "Junior", "Senior", "Graduate"].map(
                  (place, index) => (
                    <div
                      key={"place" + index}
                      className="border-b-2 pb-1 mb-2 group hover:border-indigo-600 duration-200"
                    >
                      <h5 className="text-lg font-bold">{place} Category</h5>
                    </div>
                  )
                )}
                <div className="mt-2 text-sm text-slate-900 group-hover:text-slate-300 duration-200">
                  <h4 className="font-bold">Notes:</h4>
                  <ul className="ml-4 list-disc">
                    <li>
                      Classifications with a higher score gets preferred choice
                      from the Clasfification Prize Pool.
                    </li>
                    <li>
                      Teams that win a main prize cannot also win a class year
                      prize.
                    </li>
                    <li>
                      Class year is determined by the member of your team with
                      the highest class year.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase" style={rowdies.style}>
            Special / &quot;Creative&quot; Prizes (Top 3)
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 mt-2 ">
            <div className="bg-blue-400 border-2 rounded-lg px-4 pb-4 pt-2 flex-grow0">
              <h4 className="mb-2">Prize Pool</h4>
              <div className="flex gap-4 flex-wrap justify-between">
                {mysteryPrizes.map((prize, index) => (
                  <PrizeItem
                    key={"prize" + index}
                    item={prize.item}
                    description={prize.description}
                    pic={"/prizes" + prize.pic}
                  ></PrizeItem>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Prizes</h4>
              <div className="flex flex-col rounded-lg border-2 p-4 bg-blue-600">
                {["First to Solve Problem A", "???", "???", "???", "???"].map(
                  (place, index) => (
                    <div
                      key={"place" + index}
                      className="border-b-2 pb-1 mb-2 group hover:border-slate-500 duration-200"
                    >
                      <h5 className="text-lg font-bold">{place}</h5>
                      <div className="text-md text-slate-400 group-hover:text-slate-300 duration-200">
                        <p>
                          Choice from the Special/&quot;Creative&quot; Prize
                          pool.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-8">
        <h2
          id="sponsors"
          className="text-4xl font-bold uppercase"
          style={rowdies.style}
        >
          Sponsors
        </h2>
        <div className="flex items-center gap-8 justify-between">
          {sponsors.map((sponsor, index) => (
            <TooltipProvider key={"sponsor" + index}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={sponsor.link}
                    className="flex items-center gap-4 hover:scale-[1.1] duration-200"
                  >
                    <Image
                      src={"/sponsors" + sponsor.logo}
                      alt={sponsor.name}
                      width={100}
                      height={100}
                    ></Image>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{sponsor.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      {/* <div id="faq" className="w-full p-8">
        <h2 className="text-4xl font-bold uppercase" style={ rowdies.style }>
          FAQ
        </h2>
        <div>
          {}
        </div>
      </div> */}
      <Footer></Footer>
    </main>
  );
}
