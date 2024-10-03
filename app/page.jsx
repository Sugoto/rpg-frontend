import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="h-screen mx-auto px-4 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${"/landingpage.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome to the <br /> Fractal Chronicles RPG
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 m-36">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Existing player?
          </h2>
          <Input
            type="text"
            placeholder="Enter user_id"
            className="text-white"
          />
          <Button variant="secondary" className="w-full font-bold">
            Login
          </Button>
        </div>

        <Separator className="hidden md:block w-5" orientation="vertical" />

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">
            New player?
          </h2>
          <Button variant="secondary" className="w-full font-bold">
            Start your adventure
          </Button>
        </div>
      </div>
    </div>
  );
}
