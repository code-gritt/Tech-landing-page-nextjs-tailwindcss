"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#FFFFFF] relative group/card dark:border-white w-auto sm:w-[30rem] h-[400px] rounded-xl p-6 border">
        {/* <CardItem translateZ="50" className="text-xl font-bold text-[#5f5f61]">
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-[#5f5f61] text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4">
          <video
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            height="1000"
            width="1000"
            muted
            autoPlay
            loop
            controls
          >
            <source src="/babyg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardItem>
        {/* <div className="flex justify-between items-center mt-2.5">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
