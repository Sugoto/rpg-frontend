import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Play() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 gap-4">
      {/* Player Stats Bar */}
      <Card className="w-full p-2">
        <div className="flex justify-between items-center">
          <div className="w-1/3"></div>
          <h2 className="text-xl font-bold text-center w-1/3">Aragorn</h2>
          <div className="flex gap-4 w-1/3 justify-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="font-semibold">Lvl 5</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>XP: 4500 / 6000</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="font-semibold">HP: 45/45</span>
            <span className="font-semibold">Gold: 250</span>
            <span className="font-semibold">AC: 16</span>
          </div>
        </div>
      </Card>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row gap-4 flex-grow">
        {/* Location and Quest Details */}
        <Card className="w-full lg:w-1/4">
          <CardHeader>
            <CardTitle className="text-center font-bold">
              Quest Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <h3 className="font-bold">Current Location: Forest of Shadows</h3>
              <p className="mt-2">
                A dense, misty forest with ancient trees towering above you. The
                air is thick with the scent of moss and decay.
              </p>
              <h3 className="font-bold mt-4">Active Quest: The Lost Amulet</h3>
              <p className="mt-2">
                Find the legendary amulet hidden deep within the Forest of
                Shadows. Beware of the forest's guardians!
              </p>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-center">Adventure Log</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-20rem)]">
              <div className="space-y-4">
                {/* Chat messages will go here */}
                <p className="bg-blue-100 p-2 rounded">
                  You enter the Forest of Shadows. The trees seem to whisper
                  ancient secrets...
                </p>
                <p className="bg-gray-100 p-2 rounded">
                  What would you like to do?
                </p>
              </div>
            </ScrollArea>
            <div className="mt-4 flex items-center">
              <Textarea
                placeholder="Type your action..."
                className="mr-2 resize-none"
              />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>

        {/* Character Details */}
        <Card className="w-full lg:w-1/4">
          <CardHeader>
            <CardTitle className="text-center">Character Sheet</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <h3 className="font-bold">Abilities</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>STR: 14</div>
                <div>DEX: 12</div>
                <div>CON: 13</div>
                <div>INT: 15</div>
                <div>WIS: 14</div>
                <div>CHA: 10</div>
              </div>
              <h3 className="font-bold mt-4">Equipment</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Longsword</li>
                <li>Shield</li>
                <li>Leather Armor</li>
                <li>Backpack</li>
                <li>Rations (5 days)</li>
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
