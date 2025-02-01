"use client";

import { motion } from "motion/react";
import { WorldMap } from "./ui/world-map";
import { SignupFormDemo } from "./SignupFormDemo";

export function WorldMapDemo() {
  return (
    <div className="relative py-40 bg-white w-full">
      {/* Background WorldMap */}
      <div className="absolute inset-0 z-0">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-start">
        <div className="flex flex-col items-start md:w-1/3">
          <p className="font-bold text-xl md:text-4xl bgtext">
            Connect to us Today
          </p>
          <span className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Utilize Our Cutting-Edge Solutions to Transform Your Business and
            Increase Customer Loyalty
          </span>
          <SignupFormDemo />
        </div>

        <div className="flex-shrink-0 md:w-1/2"></div>
      </div>
    </div>
  );
}
