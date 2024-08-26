import Image from "next/image";

// components
import Header from '../../components/header'

// fonts
import { rowdies } from "../fonts";

export default function Tips() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header></Header>
      <div className="flex flex-col gap-8 my-28">
        <h1 className="text-6xl font-bold uppercase " style={ rowdies.style }> 
          ACPC Programming Contest Tips
        </h1>
        <div>
          <h2 className="text-4xl font-bold uppercase">Getting Time Limit Exceeded?</h2>

          <p>If you&rsquo;re using Python, make sure you select PyPy 2 or 3 and not Python 2 or 3.</p>

          <p>
              If you&rsquo;re already doing this, it is likely that your algorithm is too slow 
              (but make sure you don&rsquo;t just have an infinite loop!). To avoid this, one can 
              do a quick mental calculation to get an idea of whether or not an algorithm is 
              worth coding.
          </p>
          <p>
              The general rule of thumb is that you can do approximately 108 operations in a second. 
              So if the time limit is 1 second, your algorithm is O(n2), and n=105, you would need 
              about (105)2 / 108 = 100 seconds to run this code, so it&rsquo;s obvious that you shouldn&rsquo;t
              spend time typing it, and instead must find a more efficient solution. 
              On the other hand, if your algorithm is O(n log n), you will have about 
              20 * 105 = 2 * 106 operations, which should pass within the 1 second of time
              allotted. Note that if you are using a scripted language, such as Python, 
              you should consider about 106-107 to be the maximum number of operations you 
              can do in a second, to be on the safe side.
          </p>
          <p>
              You can also use Fast I/O methods to speed your Python solution up. 
              Here is a 
              <a href="https://github.com/cheran-senthil/PyRival/blob/master/templates/template.py"
                  target="_blank" rel="noopener noreferrer"
              >
                  template
              </a>.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold uppercase">Getting Integer Overflow?</h2>
          <p>
              Recall that a 32-bit integer (<code>int</code> in C++ and Java, for example) can 
              store a value of at most 231 - 1 (about 2*109). It is not always the case that 
              this is high enough. If you are working with values higher than this, you should use the 
              <code>long long</code> type in C++ (or <code>long double</code> if you really need a lot of 
              precision!) or the <code>long</code> type in Java. Python has no limit 
              on the size the <code>int</code> type can store, so 
              you should be okay. If you are using another language and are unsure, please ask 
              using the clarification system on Codeforces.
          </p>
        </div>
      </div>
    </main>
  );
}
