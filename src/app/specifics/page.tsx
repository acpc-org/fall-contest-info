import Image from "next/image";

// components
import Header from '../../components/header'

// fonts
import { rowdies } from "../fonts";

export default function Specifics() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header></Header>
      <div className="flex flex-col gap-8 my-28">
        <h1 className="text-6xl font-bold uppercase " style={ rowdies.style }> 
          Contest Specifics
        </h1>
        <div>
            <h2 className="text-4xl font-bold uppercase">Logistics</h2>
            <ul className="ml-4 list-disc">
                <li>
                    The contest lasts 5 hours (1:00-6:00 PM) at the PETR 118 and will be held through codeforces.com.
                </li>
                <li>
                    You will be required to set up an account on Codeforces, and should do so before registering.
                </li>
                <li>
                    Participants need to sign up in advance.
                </li>
                <li>
                S olutions to problems are submitted by uploading code, which will be compiled and run against test cases. Problems typically have a time limit of 1 second for the code to solve each test case. There will be between 14 - 18 problems in total.
                </li>
            </ul>
        </div>
        <div>
            <h2 className="text-4xl font-bold uppercase">Problems</h2>
            <ul className="ml-4 list-disc">
                <li>
                    There will be between 14 - 18 problems in total.
                </li>
                <li>
                    Solutions to problems are submitted by uploading code, which will be compiled and run against test cases. 
                </li>
                <li>
                    Problems typically have a time limit of 1 second for the code to solve each test case. 
                </li>
                <li>
                    Problems are not given in order of difficulty.
                </li>
                <li>
                    Input is read from standard input, and output is written to standard output (for C++, this is cin and cout).
                </li>
            </ul>
        </div>
        <div>
            <h2 className="text-4xl font-bold uppercase">Judging</h2>
            <ul className="ml-4 list-disc">
                <li>
                    Competitors are ranked by number of problems solved.
                </li>
                <li>
                    The tiebreaker is the total amount of time used to solve the problems, with a 20 minute penalty for each incorrect submission if the problem is eventually solved. 
                </li>
                <li>
                    Problems typically have a time limit of 1 second for the code to solve each test case. 
                </li>
                <li>
                    Input is read from standard input, and output is written to standard output (for C++, this is cin and cout).
                </li>
            </ul>
        </div>
      </div>
    </main>
  );
}
