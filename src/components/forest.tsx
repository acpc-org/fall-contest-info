"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

export default function Forest() {
  return (
    <>
      <ParallaxBanner
        layers={[
          { image: "/layers/layer5.png", speed: -5 },
          { image: "/layers/layer4.png", speed: -2.5 },
          { image: "/layers/layer3.png", speed: 1 },
          {
            speed: -15,
            children: (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                  src="/car_crash.gif"
                  alt=""
                  width={700}
                  height={700}
                  className="translate-y-4"
                />
              </div>
            ),
          },
          { image: "/layers/layer2.png", speed: 4 },
          { image: "/layers/layer1.png", speed: 8 },
        ]}
        className="h-[500px] w-[100vw] aspect-[16/9] bg-[#0f2828] "
      />
      <div className="w-full h-full flex flex-col items-center justify-end p-8 bg-[#090b12]">
        <p className="italic text-white text-center">
          Your ACPC-sponsored field trip has taken quite the turn as the camping
          van crashes prior to reaching its destination. Stranded in the woods,
          you begin to witness unspeakable things. Now, it’s a matter of
          survival: will your problem-solving and programming skills be enough
          to make it through the night?
        </p>
      </div>
    </>
  );
}
