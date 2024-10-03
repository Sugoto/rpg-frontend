import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="h-screen mx-auto px-4 sm:px-8 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${"/landingpage.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mt-10">
        Welcome to the <br /> Fractal Chronicles RPG
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 m-4 sm:m-36">
        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            Existing player?
          </h2>
          <Input
            type="text"
            placeholder="Enter username"
            className="text-white bg-opacity-50 backdrop-filter backdrop-blur-sm"
          />
          <Link href="/play">
            <Button variant="secondary" className="w-full font-bold mt-5">
              Continue
            </Button>
          </Link>
        </div>

        <Separator className="hidden sm:block w-5" orientation="vertical" />

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            New player?
          </h2>
          <Link href="/new-player">
            <Button variant="secondary" className="w-full font-bold mt-5">
              Start your adventure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
