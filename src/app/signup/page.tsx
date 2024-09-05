import Image from "next/image";

// components
import Header from "../../components/header";

// fonts
import { rowdies } from "../fonts";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 sm:px-24">
      <Header></Header>
      <div className="flex flex-col gap-8 my-28">
        <h1 className="text-6xl font-bold uppercase " style={rowdies.style}>
          Contest Sign Up
        </h1>
        <ol className="list-decimal">
          <li className="mb-8">
            <h2 className="text-lg font-bold uppercase">
              Make a Codeforces Account
            </h2>
            <p>
              The contest is online, run on the Codeforces platform. You must
              sign up for a{" "}
              <a
                href="https://codeforces.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dashed hover:decoration-solid"
              >
                codeforces.com
              </a>{" "}
              account and use it when you register for the contest. If you have
              one already, just use that one.
            </p>
          </li>
          <li className="mb-8">
            <h2 className="text-lg font-bold uppercase">Sign Up</h2>
            <p>
              Sign up using the Google Form below (also available at{" "}
              <a
                href="https://tx.ag/fall24signup"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dashed hover:decoration-solid "
              >
                tx.ag/fall24register
              </a>
              ). You must sign up by April 13th at 11:59 PM. Each
              participantmate should fill out the form.
            </p>
            <div className="bg-neutral-800 py-4 rounded-lg mt-4">
              <iframe
                src="https://docs.google.com/forms/d/1CK4UYYv6J5Z5OB9lP-nNI92bWRlDfz5vSPUGbzL4mzU/viewform?embedded=true"
                width="640"
                height="4122"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </li>
          <li className="mb-8">
            <h2 className="text-lg font-bold uppercase">Get Hyped</h2>
            <p>
              Wooh! Congrats on signing up for the contest! You can get ready by
              practicing with your participant on Codeforces or any other
              competitive coding platform, attending our meetings, and checking
              up our socials in the meantime.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}
