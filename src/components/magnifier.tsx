"use client"

import Image from "next/image";
import React, { useState } from "react";

interface MagnifierProps {
    src: string;
    width?: string;
    height?: string;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
}

export default function Magnifier({
    src,
    width,
    height,
    magnifierHeight = 100,
    magnifierWidth = 100,
    zoomLevel = 1.5
  }: MagnifierProps ) {

    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    return (
      <div className="h-[height] w-[width] relative">
        <Image
          src={src}
          height={500}
          width={500}
          style={{ height: height, width: width }}
          onMouseEnter={(e) => {
            // update image size and turn-on magnifier
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
  
            // calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // close magnifier
            setShowMagnifier(false);
          }}
          alt={"img"}
        />
  
        <div
          className="rounded-[50%] z-0"
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
  
            // prevent maginier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
  
            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
  
            //calculete position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
          }}
        ></div>
      </div>
    );
  }
  