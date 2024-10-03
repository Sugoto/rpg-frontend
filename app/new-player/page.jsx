"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Shield,
  Coins,
  Swords,
  VenetianMask,
  Cog,
  Sparkles,
} from "lucide-react";

const classes = [
  {
    icon: <Swords />,
    name: "Warrior",
    description:
      "A master of martial combat, skilled with a variety of weapons and armor.",
    abilities: { STR: 3, DEX: 2, CON: 1, INT: 0, WIS: 1, CHA: -1 },
    equipment: ["Sword", "Shield", "Steel Armor"],
    hp: 25,
    ac: 16,
    gold: 50,
  },
  {
    icon: <VenetianMask />,
    name: "Rogue",
    description:
      "A skillful expert of stealth and subterfuge, specializing in precision strikes.",
    abilities: { STR: 0, DEX: 3, CON: 1, INT: 1, WIS: -1, CHA: 2 },
    equipment: ["Daggers", "Thieves' Tools", "Leather Armor"],
    hp: 20,
    ac: 14,
    gold: 100,
  },
  {
    icon: <Cog />,
    name: "Artificer",
    description:
      "A master of invention, creating innovative contraptions to overcome challenges.",
    abilities: { STR: -1, DEX: 0, CON: 1, INT: 3, WIS: 2, CHA: 1 },
    equipment: ["Crossbow", "Tinker's Tools", "Mage's Robes"],
    hp: 15,
    ac: 12,
    gold: 50,
  },
  {
    icon: <Sparkles />,
    name: "Skyseer",
    description:
      "A divine oracle gifted with the ability to interpret the will of the heavens.",
    abilities: { STR: 1, DEX: 0, CON: 2, INT: 0, WIS: 3, CHA: 2 },
    equipment: ["Staff", "Star Dust", "Mystical Robes"],
    hp: 15,
    ac: 12,
    gold: 25,
  },
];

export default function NewPlayer() {
  const [uniqueId, setUniqueId] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      uniqueId,
      characterName,
      class: selectedClass ? selectedClass.name : null,
    });
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-5">
        The Chronicles of...
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="characterName">Character Name</Label>
            <Input
              id="characterName"
              placeholder="Enter your character's name"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              required
              className=""
            />
          </div>
          <div>
            <Label htmlFor="userName">Username</Label>
            <Input
              id="userName"
              placeholder="Enter a unique username"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center">You are a...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {classes.map((classItem) => (
              <Card
                key={classItem.name}
                className={`hover:shadow-2xl hover:ring-2 ring-gray-200 cursor-pointer transition-all duration-300 ease-in-out ${
                  selectedClass === classItem ? "ring-2 ring-gray-500" : ""
                }`}
                onClick={() => setSelectedClass(classItem)}
              >
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-row gap-4">
                      {classItem.icon}
                      <h1 className="mt-1">{classItem.name}</h1>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{classItem.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div
                    className={`w-full transition-all duration-300 ease-in-out overflow-hidden`}
                  >
                    <div className="grid grid-cols-3 gap-2 w-full mb-2">
                      {Object.entries(classItem.abilities).map(
                        ([ability, score]) => (
                          <div key={ability} className="text-sm">
                            {ability} {score >= 0 ? `+${score}` : score}
                          </div>
                        )
                      )}
                    </div>
                    <Separator className="my-4" />

                    <div className="grid grid-cols-3 gap-2 w-full mb-2">
                      <div className="text-sm flex items-center">
                        <Heart className="h-4 text-red-500" />
                        <span>{classItem.hp}</span>
                      </div>
                      <div className="text-sm flex items-center">
                        <Shield className="h-4 text-slate-500" />
                        <span>{classItem.ac}</span>
                      </div>
                      <div className="text-sm flex items-center">
                        <Coins className="h-4 text-yellow-500" />
                        <span>{classItem.gold}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 mt-4 items-center text-center">
                    {classItem.equipment.map((equipmentItem) => (
                      <Badge key={equipmentItem} variant="outline">
                        {equipmentItem}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Create Character
        </Button>
      </form>
    </div>
  );
}
