"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
import { Heart, Shield, Coins, ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Play() {
  const [isQuestDetailsOpen, setIsQuestDetailsOpen] = useState(false);
  const [isCharacterSheetOpen, setIsCharacterSheetOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsQuestDetailsOpen(true);
      setIsCharacterSheetOpen(true);
    }
  }, [isDesktop]);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:8000/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found!");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  const CollapsibleCard = ({
    title,
    isOpen,
    setIsOpen,
    children,
    className,
  }) => (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`w-full ${className}`}
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-bold">{title}</CardTitle>
            {!isDesktop && (
              <CollapsibleTrigger>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
            )}
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-20rem)]">
              {children}
            </ScrollArea>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Alert variant="destructive" className="w-40">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 gap-4">
      {/* Player Stats Bar */}
      <Card className="w-full p-2">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-1/3" /> {/* Spacer */}
          <h2 className="text-xl font-bold text-center w-1/3">
            {isLoading ? (
              <Skeleton className="h-6 w-24" />
            ) : (
              userData?.char_name
            )}
          </h2>
          <div className="flex gap-10 w-full sm:w-1/3 justify-center sm:justify-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center">
                    <Heart className="mr-1 text-red-500" size={20} />
                    <span className="font-semibold">
                      {isLoading ? (
                        <Skeleton className="h-4 w-12" />
                      ) : (
                        `${userData?.hp}/${userData?.hp}`
                      )}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hit Points</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center">
                    <Shield className="mr-1 text-slate-500" size={20} />
                    <span className="font-semibold">
                      {isLoading ? (
                        <Skeleton className="h-4 w-8" />
                      ) : (
                        userData?.ac
                      )}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Armor Class</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center md:mr-10">
                    <Coins className="mr-1 text-yellow-500" size={20} />
                    <span className="font-semibold">
                      {isLoading ? (
                        <Skeleton className="h-4 w-10" />
                      ) : (
                        userData?.gold
                      )}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gold</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </Card>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row gap-4 flex-grow">
        {/* Quest Details */}
        <CollapsibleCard
          title="Quest Details"
          isOpen={isQuestDetailsOpen}
          setIsOpen={setIsQuestDetailsOpen}
          className="lg:w-1/4 order-2 lg:order-1"
        >
          <h3 className="font-bold">Location:</h3>
          <p className="mt-2">
            A dense, misty forest with ancient trees towering above you. The air
            is thick with the scent of moss and decay.
          </p>
          <h3 className="font-bold mt-4">Active Quest:</h3>
          <p className="mt-2">
            Find the legendary amulet hidden deep within the Forest of Shadows.
            Beware of the forest's guardians!
          </p>
        </CollapsibleCard>

        {/* Chat Area */}
        <Card className="w-full lg:w-1/2 order-1 lg:order-2">
          <CardHeader>
            <CardTitle className="text-center">Adventure Log</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-20rem)]">
              <div className="space-y-4">
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
        <CollapsibleCard
          title="Character Sheet"
          isOpen={isCharacterSheetOpen}
          setIsOpen={setIsCharacterSheetOpen}
          className="lg:w-1/4 order-3"
        >
          <h3 className="font-bold">Abilities</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {isLoading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} className="h-4 w-16" />
                  ))
              : Object.entries(userData?.abilities || {}).map(
                  ([key, value]) => <div key={key}>{`${key}: ${value}`}</div>
                )}
          </div>
          <h3 className="font-bold mt-4">Equipment</h3>
          <ul className="list-disc list-inside mt-2">
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index}>
                      <Skeleton className="h-4 w-24 inline-block" />
                    </li>
                  ))
              : userData?.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
          </ul>
        </CollapsibleCard>
      </div>
    </div>
  );
}
