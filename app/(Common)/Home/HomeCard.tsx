"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";
import { useRef } from "react";
function CardSmall() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>
          This card uses the small size variant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The card component supports a size prop that can be set to
          &quot;sm&quot; for a more compact appearance.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function HomeCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <div className="bg-emerald-500 w-[94vw] p-5 mx-auto">
      <Carousel
        plugins={[plugin.current]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex">
              <CardSmall></CardSmall>
              <CardSmall></CardSmall>
              <CardSmall></CardSmall>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex">
              <CardSmall></CardSmall>
              <CardSmall></CardSmall>
              <CardSmall></CardSmall>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex">
              <CardSmall></CardSmall>
              <CardSmall></CardSmall>
              <CardSmall></CardSmall>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
