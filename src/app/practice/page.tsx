import Image from "next/image";

// components
import Header from '../../components/header'

// fonts
import { rowdies } from "../fonts";

export default function Practice() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
        <Header></Header>
        <div className="flex flex-col gap-8 my-28">
            <h1 className="text-6xl font-bold uppercase " style={ rowdies.style }> 
                Practice Problem
            </h1>
            <h2 className="italic">
              Example Problem: I Need Pumpkins!
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Problem</h3>
              <p>
                After everyone hyped up Friday the 13th, Mark couldn&apos;t wait to celebrate it and made plans to celebrate it this November! However, he made a fatal flaw: as it turns out, he got the date off by one and is now celebrating Saturday the 13th.
              </p>
              <p>
                Given that Mark had already made plans to celebrate and the fact that he is a victim of the sunk-cost fallacy, Mark decided to go through with the party anyway and wants to make his final preparations.
              </p>
              <p>
                Mark wants to add a scary vibe to his celebration and wants at least p scary pumpkins for his guests. To get these pumpkins, Mark knows n pumpkin patches that each hold some number of scary pumpkins. Given the number of scary pumpkins in each pumpkin patch, what is the minimum number of patches Mark will need to go to in order to get at least p scary pumpkins?
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Input</h3>
              <p>
                The first line contains p (1 ≤ p ≤ 10^9) and n (1 ≤ n ≤ 10^5).
              </p>
              <p>
                The second line contains n space-separated integers xi, the number of scary pumpkins in the ith pumpkin patch (1 ≤ xi ≤ 10^4).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Output</h3>
              <p>
                Output one integer: the minimum number of patches Mark must visit to get at least p scary pumpkins.
              </p>
              <p>
                If it is not possible for Mark to get at least p pumpkins, output -1 instead.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sample Test Case</h3>
              <h4 className="text-lg font-bold mt-4">Input</h4>
              <div className="p-2 rounded-lg bg-black border-2">
                <p><code>10 5</code></p>
                <p><code>1 8 3 1 4</code></p>
              </div>
              <h4 className="text-lg font-bold mt-4">Output</h4>
              <div className="p-2 rounded-lg bg-black border-2">
                <p><code>2</code></p>
              </div>
              <h4 className="text-xl font-bold mt-4">Sample Explanation</h4>
              <p>
                Mark can visit the 2nd and 5th patches to get 12 scary pumpkins, which is enough.
              </p>
            </div>
        </div>
    </main>
  );
}
