import Image from "next/image";

// components
import Header from "../../components/header";

// fonts
import { rowdies } from "../fonts";

export default function Rules() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header></Header>
      <div className="flex flex-col gap-8 my-28">
        <h1 className="text-6xl font-bold uppercase " style={rowdies.style}>
          Rules
        </h1>
        <div>
          <p>
            This is a solo contest and you must work individually! You{" "}
            <b>may not</b>:
          </p>
          <ul className="ml-4 list-decimal">
            <li>Collaborate with anyone else either online or in person</li>
            <li>
              Use AI tools such as copilot or ChatGPT to write real-time code
              during the contest
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
