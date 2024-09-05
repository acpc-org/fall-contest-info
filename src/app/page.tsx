import Image from "next/image";

// components
import Header from "@/components/header";
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
import Forest from "@/components/forest";

// lists
const schedule = [
  {
    time: "Thursday, September 19th",
  },
  {
    time: "7:00 PM - 8:00 PM",
    event: "Sponsored Kickoff by ROBLOX",
  },
  {
    time: "Sunday, September 22nd",
  },
  {
    time: "12:00 PM - 1:00 PM",
    event: "Check-In / Pre Contest",
  },
  {
    time: "1:00 PM - 4:00 PM",
    event: "Contest",
  },
  {
    time: "4:00 PM - 4:15 PM",
    event: "Pizza / Break",
  },
  {
    time: "4:15 PM - 4:30 PM",
    event: "Prizes",
  },
  {
    time: "4:30 PM - 5:00 PM",
    event: "Problem Solutions",
  },
];

const sponsors = [
  {
    name: "Roblox",
    logo: "/roblox.png",
    link: "https://www.roblox.com/",
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
    item: "Airpods Max",
    description:
      "Apple's AirPods Max: wireless over-ear headphones with active noise cancelling, transparency mode, personalized spatial audio, dolby atmos, and bluetooth for iPhone",
    pic: "/airpod_max.png",
  },
  {
    item: "Faker Mouse",
    description:
      "Razer DeathAdder V3 Pro Wireless Gaming Mouse: 63g, Focus Pro 30K Optical Sensor, Optical Switches Gen-3, HyperSpeed Wireless, 5 Programmable Buttons, 90 Hr Battery (Faker Edition)",
    pic: "/gaming_mouse.png",
  },
  {
    item: "Airtags",
    description:
      "Airtags: Keep track of and find your items alongside friends and devices in the Find My app (4 pack)",
    pic: "/airtags.png",
  },
  {
    item: "Samsung Odyssey Monitor",
    description:
      "SAMSUNG 27-Inch Odyssey G55C Series QHD 1000R Curved Gaming Monitor, 1ms(MPRT), HDR10, 165Hz, AMD Radeon FreeSync, Eye Care",
    pic: "/monitor.png",
  },
  {
    item: "Lego Set",
    description:
      "LEGO Tranquil Garden Creative Building Set: Japanese Zen Gardens",
    pic: "/lego.png",
  },
];

const classificationPrizes = [
  {
    item: "Portable Speaker",
    description:
      "JBL Flip 6 - Portable Bluetooth Speaker: powerful sound and deep bass, IPX7 waterproof, 12 hours of playtime, JBL PartyBoost for multiple speaker pairing for home, outdoor and travel (Red)",
    pic: "/portable_speaker.png",
    timeFive: true,
  },
  {
    item: "Mechanical Keyboard",
    description:
      "EPOMAKER CIDOO V75 VIA Wireless Aluminum Mechanical Keyboard: 75% Gasket Gaming Keyboard, Bluetooth/2.4Ghz/USB-C Creamy Keyboard, with South-Facing LED, Rotary Knob, Poron Foam for Mac & Windows",
    pic: "/mechanical_keyboard.png",
    timeFive: true,
  },
  {
    item: "Goodr Sunglasses",
    description:
      "These red aviator sunglasses are named after Captain Blunt, a real pilot who happens to be Goodr's co-founder’s dad. That’s the only reference these no slip red frames and polarized red reflective lenses are making. Great for biking, running, golfing, and eating olympic quantities of taquitos.",
    pic: "/goodr_sunglasses.png",
    timeFive: true,
  },
];

const mysteryPrizes = [
  {
    item: "Mystery Prize",
    description: "?????",
    pic: "/unknown.png",
    timeFive: true,
  },
  {
    item: "Very Mysterious Prize",
    description: "?????",
    pic: "/unknown.png",
    timeFive: true,
  },
  {
    item: "Unknown Prize",
    description: "?????",
    pic: "/unknown.png",
    timeFive: true,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-20 bg-[#132b2e]">
      <Header></Header>
      <div className="flex flex-col items-center justify-center text-center pt-28 bg-[#000]">
        <div className="absolute w-[100vw] top-0 h-[60vh] z-[5] translate-y-[100px] bg-gradient-to-b from-[#000000cb] from-50% via-[#020d0d89] via-80% to-[#020d0d00] to-100%"></div>
        <div className="flex flex-col gap-4 items-center justify-center pb-8 px-4 sm:px-12 ">
          <h1
            className="text-3xl sm:text-4xl font-bold text-white uppercase z-[6]"
            style={rowdies.style}
          >
            ACPC × ROBLOX
          </h1>
          <h1
            className="text-5xl sm:text-6xl font-bold text-white uppercase z-[6]"
            style={rowdies.style}
          >
            Fall Contest
          </h1>
          <div className="flex items-center gap-4 text-black">
            <div
              className="bg-image text-sm sm:text-md py-1 px-4 z-[6] flex-grow flex items-center gap-0 sm:gap-2 shadow-md hover:scale-[1.05] hover:rotate-1 hover:shadow-lg duration-200"
              style={{ backgroundImage: "url('/wood/wood1.png')" }}
            >
              <RxClock></RxClock>
              <p>Sep 19th - 7:00 PM and Sep 22nd - 12:00 PM</p>
            </div>
            <div
              className="bg-image text-sm sm:text-md py-1 px-4 z-[6] flex-grow flex items-center gap-0 sm:gap-2 shadow-md hover:scale-[1.05] hover:rotate-1 hover:shadow-lg duration-200"
              style={{ backgroundImage: "url('/wood/wood2.png')" }}
            >
              <RxSewingPinFilled></RxSewingPinFilled>
              <p>PETR 118</p>
            </div>
            <div
              className="bg-image text-sm sm:text-md py-1 px-4 z-[6] flex-grow flex items-center gap-0 sm:gap-2 shadow-md hover:scale-[1.05] hover:rotate-1 hover:shadow-lg duration-200"
              style={{ backgroundImage: "url('/wood/wood1.png')" }}
            >
              <RxFace></RxFace>
              <p>Food + Prizes</p>
            </div>
          </div>
        </div>
        <div className="w-100vw">
          <Forest />
        </div>
        <div className=" w-[100vw] h-[10vh] bg-gradient-to-b from-[#02090c] from-25% to-[#132b2e] to-100%"></div>
      </div>
      <div className="flex justify-bottom px-4 sm:px-12">
        <div
          className="bg-image w-full rounded-lg pl-24 pr-10 py-24 duration-500 text-black"
          style={{ backgroundImage: "url('/paper.png')" }}
        >
          <h2
            id="what"
            className="text-4xl font-bold uppercase mb-4"
            style={rowdies.style}
          >
            What is going on???
          </h2>
          <p className="mb-4">
            Welcome to{" "}
            <a
              href="https://tx.ag/acpcwebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed hover:decoration-solid bold text-orange-500 hover:text-orange-700 duration-200"
              style={rowdies.style}
            >
              Aggie Competitive Programming Club
            </a>
            &rsquo;s Fall competitive programming contest! Here, You’ll see
            between nine-twelve competitive programming problems in this contest
            with difficulties ranging from{" "}
            <span className="bold text-orange-500" style={rowdies.style}>
              completely trivial
            </span>{" "}
            to{" "}
            <span className="bold text-orange-500" style={rowdies.style}>
              omega difficult
            </span>
            . Whether you are just starting off with coding or are a “seasoned
            codeforces chef”, we hope that you’ll find a variety of problems
            that provide the perfect level of challenge for you!
          </p>
          <p className="mb-8">
            Solving competitive programming problems is all about problem
            solving + logical thinking and finding ways to implement your ideas
            in code. Each problem has a well-defined algorithmic solution that
            you must identify and implement in order to solve.
          </p>
          <p className="mb-8">
            If you’re a complete beginner, don’t worry! We have y’all in mind,
            and most of the problems in our set do not require advanced
            programming techniques or algorithms. Instead, they read more like
            puzzles!
          </p>
          <p className="mb-8">
            So come, and compete for the chance to win prizes, qualify for{" "}
            <a
              className="underline decoration-dashed hover:decoration-solid bold text-orange-500 hover:text-orange-700 duration-200"
              style={rowdies.style}
              href="https://icpc.global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              the International Collegiate Programming Contest (ICPC)
            </a>
            , enjoy free food, have fun with friends!
          </p>
          <Image
            src={"/stuff/campfire.png"}
            alt={""}
            width={175}
            height={175}
            className="absolute bottom-0 right-0 translate-y-5 z-1 hover:scale-105 hover:-rotate-1 duration-150"
          ></Image>
          <a
            className="pulse-animation py-2 px-4 rounded-lg text-yellow-50 bg-orange-400 hover:text-white hover:bg-orange-500 hover:scale-105 hover:rotate-1 duration-200"
            style={rowdies.style}
            href="/signup"
          >
            Contest Sign Up
          </a>
        </div>
      </div>
      <div className="w-full px-12 sm:px-20">
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
        <div className="mt-4 flex flex-col sm:flex-row gap-4 text-black">
          <div className="group flex flex-col hover:px-10 border-[6px] rounded-md p-8 border-[#423225] bg-[#d0a87a] shadow-sm hover:shadow-md duration-500">
            <Image
              src={"/stuff/bear.png"}
              alt={""}
              width={175}
              height={175}
              className="absolute z-1 left-0 translate-x-8 -translate-y-4 group-hover:scale-105 -rotate-12 group-hover:-rotate-6 duration-150"
            ></Image>
            <div className="flex flex-col h-full items-center justify-center gap-2">
              <p className="text-8xl font-bold">5</p>
              <p className="text-xl">Hours</p>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap gap-4 duration-200">
            <div
              className="flex-grow flex items-center justify-center p-4 bg-image hover:scale-105 hover:rotate-1 duration-200"
              style={{ backgroundImage: "url('/wood/wood2.png')" }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <div className="text-2xl font-bold flex items-center gap-2">
                        <RxClock></RxClock>
                        <p>September 19th</p>
                      </div>
                      <p className="text-lg">7:00 PM - 8:00 PM</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold flex items-center gap-2">
                        <RxClock></RxClock>
                        <p>September 22nd</p>
                      </div>
                      <p className="text-lg">12:00 PM - 5:00 PM</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <a href="/#schedule">See Schedule</a>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex-grow flex items-center justify-center border-[6px] rounded-md p-4 border-[#423225] bg-[#d0a87a] shadow-sm hover:shadow-md hover:scale-105 hover:rotate-1 duration-200">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <RxSewingPinFilled></RxSewingPinFilled>
                  <p>Peterson Building</p>
                </div>
                <p className="text-lg">Room 118</p>
              </div>
            </div>
            <div
              className="flex-grow flex items-center justify-center text-lg px-4 font-bold bg-image hover:scale-105 hover:rotate-1 duration-200"
              style={{ backgroundImage: "url('/wood/wood4.png')" }}
            >
              All Majors and Classifications welcome
            </div>
            <div className="flex flex-col sm:flex-row flex-grow gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="group flex-grow flex items-end justify-start h-full border-[6px] rounded-md p-4 border-[#523522] bg-[#ab785e] shadow-sm hover:shadow-md hover:rotate-1 duration-200">
                      <div className="flex flex-col gap-2 justify-center items-center h-full">
                        <p className="text-4xl font-bold">$2000+ in Prizes</p>
                        <p className="text-md">also free food and glory.</p>
                      </div>
                      <Image
                        src={"/stuff/lighter.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="absolute right-0 sm:right-auto sm:-translate-x-6 translate-y-12 z-1 hover:right-0 hover:-rotate-1 hover:sm:right-auto group-hover:scale-105 duration-150"
                      ></Image>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <a href="/#prizes">See Prizes</a>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="group flex flex-grow border-[6px] rounded-md p-4 border-[#c0845a] bg-[#ecc4a4] hover:shadow-md">
                <div>
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
                <div>
                  <Image
                    src={"/stuff/tent.png"}
                    alt={""}
                    width={175}
                    height={175}
                    className="hidden xl:block absolute z-1 right-0 lg:-translate-x-52 translate-y-[75px] group-hover:-rotate-3 group-hover:scale-105 duration-150"
                  ></Image>
                  <Image
                    src={"/stuff/tree1.png"}
                    alt={""}
                    width={150}
                    height={150}
                    className="hidden xl:block absolute z-1 right-0 -translate-x-28 -translate-y-16 rotate-2 group-hover:-rotate-6 group-hover:scale-105 duration-150"
                  ></Image>
                  <Image
                    src={"/stuff/tree2.png"}
                    alt={""}
                    width={180}
                    height={180}
                    className="hidden xl:block absolute z-1 right-0 -translate-x-6 -translate-y-6 rotate-1 group-hover:rotate-12 group-hover:scale-105 duration-150"
                  ></Image>
                  <Image
                    src={"/stuff/can.png"}
                    alt={""}
                    width={55}
                    height={55}
                    className="hidden xl:block absolute z-1 right-0 -translate-x-44 translate-y-[150px] -rotate-1 group-hover:rotate-6 group-hover:scale-105 duration-150"
                  ></Image>
                  <Image
                    src={"/stuff/plant.png"}
                    alt={""}
                    width={50}
                    height={50}
                    className="hidden xl:block absolute z-1 right-0 -translate-x-12 lg:-translate-x-72 translate-y-[120px] group-hover:rotate-3 group-hover:scale-105 duration-150"
                  ></Image>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="bg-image p-4 shadow-sm hover:shadow-md hover:scale-105 hover:rotate-1 duration-200"
                style={{ backgroundImage: "url('/wood/wood1.png')" }}
              >
                <p>You must work individually!</p>
              </div>
              <div className="border-[6px] rounded-md p-4 border-[#423225] bg-[#d0a87a] shadow-sm hover:shadow-md hover:-rotate-1 duration-200">
                <p className="text-4xl font-bold">Internet Allowed??</p>
                <p className="text-md  mt-2">
                  It is allowed to search the Internet and use code which can be
                  proved to have been published before the contest began. You
                  cannot use AI tools such as copilot or ChatGPT to write
                  real-time code during the contest.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-md border-[6px] rounded-md p-4 border-[#4a2a18] bg-[#7f4e36] shadow-sm hover:shadow-md hover:rotate-1 duration-200 group">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <p className="text-xl font-bold">
                    Only basic knowledge of programming is required
                  </p>
                  <Image
                    src={"/stuff/fish.png"}
                    alt={""}
                    width={155}
                    height={155}
                    className="absolute z-1 translate-x-2 translate-y-[250px] md:translate-y-[150px] lg:translate-y-[100px] xl:translate-y-[55px] -rotate-45 group-hover:-rotate-3 duration-150"
                  ></Image>
                </div>
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
          <div className="flex gap-4 align-center">
            <a
              href="https://www.gem.com/lp/roblox/fa24tamu-innovationsatroblox"
              className="p-2 px-4 shadow-md hover:shadow-lg hover:rotate-1 hover:scale-105 hover:duration-200 bg-image"
              style={{ backgroundImage: "url('/wood/wood4.png')" }}
            >
              ROBLOX Kickoff
            </a>
            <a
              href="/specifics"
              className="p-2 px-4 shadow-md hover:shadow-lg hover:rotate-1 hover:scale-105 hover:duration-200 bg-image"
              style={{ backgroundImage: "url('/wood/wood4.png')" }}
            >
              Contest Specifics
            </a>
            <a
              href="/rules"
              className="p-2 px-8 shadow-md hover:shadow-lg hover:rotate-1 hover:scale-105 hover:duration-200 bg-image"
              style={{ backgroundImage: "url('/wood/wood5.png')" }}
            >
              Rules
            </a>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-12">
        <h2
          id="schedule"
          className="text-4xl font-bold uppercase"
          style={rowdies.style}
          px-8
        >
          Schedule
        </h2>
        <div className="mt-4">
          {schedule.map((event, index) =>
            event.event ? (
              <div
                key={"event" + index}
                className="flex items-center justify-between border-gray-700 border-b-[1px] p-4 bg-[#173234] hover:bg-[#254b4e] rounded-lg duration-500"
              >
                <p className="text-xl font-bold">{event.time}</p>
                <p className="text-lg">{event.event}</p>
              </div>
            ) : (
              <h3
                className="text-2xl font-bold text-orange-500 mt-4 mb-2"
                style={rowdies.style}
              >
                {event.time}
              </h3>
            )
          )}
        </div>
        <p className="mt-4 italic">
          Please arrive on-time Sunday between 12:00 pm and 12:30 pm so you have
          time to properly get setup and hear important contest announcements!
        </p>
      </div>
      <div id="prizes" className="w-full px-12 sm:px-20">
        <h2 className="text-4xl font-bold uppercase" style={rowdies.style}>
          Prizes
        </h2>
        <p className="my-4">
          Enough prizes for every member of the participant, totalling over
          {"  "}
          <b className="bold text-orange-500" style={rowdies.style}>
            $2000
          </b>
          {"  "}
          in value! However, due to legal / organizational requirements, only
          Texas A&M participants can receive prizes.
        </p>
        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase" style={rowdies.style}>
            Main Prizes (Top 5)
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 mt-2">
            <div className="bg-orange-200 border-[10px] border-[#7e523a] shadow-lg rounded-lg px-4 pb-4 pt-2 flex-grow">
              <h4 className="mb-2 text-black">Prize Pool</h4>
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
              <div
                className="flex flex-col p-6 py-10 bg-image text-black"
                style={{ backgroundImage: "url('/wood/wood3.png')" }}
              >
                {["1st", "2nd", "3rd"].map((place, index) => (
                  <div
                    key={"place" + index}
                    className="border-b-2 pb-1 mb-2 group border-orange-800 hover:border-orange-950 duration-200"
                  >
                    <h5 className="text-lg font-bold">{place} Place</h5>
                    <div className="text-md text-orange-900 group-hover:text-slate-900 duration-200">
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
            Classification Prizes (Top 3)
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 mt-2">
            <div className="bg-orange-200 border-[10px] border-[#7e523a] shadow-lg rounded-lg px-4 pb-4 pt-2 flex-grow">
              <h4 className="mb-2 text-black">Prize Pool</h4>
              <div className="flex gap-4 flex-wrap justify-between">
                {classificationPrizes.map((prize, index) => (
                  <PrizeItem
                    key={"prize" + index}
                    item={prize.item}
                    description={prize.description}
                    timeFive={prize.timeFive}
                    pic={"/prizes" + prize.pic}
                  ></PrizeItem>
                ))}
              </div>
            </div>
            <div className="lg:w-[30vw]">
              <h4 className="text-lg font-bold mb-2 ">Prizes</h4>
              <div
                className="flex flex-col p-6 pb-10 bg-image text-black"
                style={{ backgroundImage: "url('/wood/wood1.png')" }}
              >
                {["Freshman", "Sophomore", "Junior", "Senior", "Graduate"].map(
                  (place, index) => (
                    <div
                      key={"place" + index}
                      className="border-b-2 pb-1 mb-2 group border-orange-800 hover:border-orange-950 duration-200"
                    >
                      <h5 className="text-lg font-bold">{place} Category</h5>
                    </div>
                  )
                )}
                <div className="mt-2 text-md text-slate-900 group-hover:text-slate-300 duration-200">
                  <h4 className="font-bold">Notes:</h4>
                  <ul className="ml-4 list-disc">
                    <li>
                      Classifications with a higher score gets preferred choice
                      from the Clasfification Prize Pool.
                    </li>
                    <li>
                      Participants that win a main prize cannot also win a class
                      year prize.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase" style={rowdies.style}>
            Special / &quot;Creative&quot; Prizes (???)
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 mt-2 ">
            <div className="bg-orange-200 border-[10px] border-[#7e523a] shadow-lg rounded-lg px-4 pb-4 pt-2 flex-grow0">
              <h4 className="mb-2 text-black">Prize Pool</h4>
              <div className="flex gap-4 flex-wrap justify-between">
                {mysteryPrizes.map((prize, index) => (
                  <PrizeItem
                    key={"prize" + index}
                    item={prize.item}
                    description={prize.description}
                    timeFive={prize.timeFive}
                    pic={"/prizes" + prize.pic}
                  ></PrizeItem>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Prizes</h4>
              <div
                className="flex flex-col p-6 py-10 bg-image text-black"
                style={{ backgroundImage: "url('/wood/wood2.png')" }}
              >
                {["First to Solve Problem A", "???", "???", "???", "???"].map(
                  (place, index) => (
                    <div
                      key={"place" + index}
                      className="border-b-2 pb-1 mb-2 group border-orange-800 hover:border-orange-700 duration-200"
                    >
                      <h5 className="text-lg font-bold">{place}</h5>
                      <div className="text-md text-orange-950 group-hover:text-orange-900 duration-200">
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
      <div className="w-full px-12 sm:px-20">
        <h2
          id="sponsors"
          className="text-4xl font-bold uppercase text-center"
          style={rowdies.style}
        >
          Sponsors
        </h2>
        <div className="flex justify-center">
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
                        width={300}
                        height={300}
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
