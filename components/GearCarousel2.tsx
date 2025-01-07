import * as React from "react";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

import { products } from "@/data/detail";

export function GearCarousel2() {
  const gear2Products = products.filter((product) =>
    product.tags.includes("gear2")
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative px-2"
    >
      <p className="text-base font-medium mb-2">Shop Women's</p>

      <CarouselContent>
        {gear2Products.map((item) => (
          <CarouselItem key={item.id} className="lg:basis-1/2">
            <Link href={`/productDetail?id=${item.id}`}>
              <div className="p-1">
                <Card className="shadow-none border-none">
                  <CardContent className=" bg-[#F5F5F5] aspect-square group ">
                    <Image
                      src={item.img}
                      alt={"shoes"}
                      width={440}
                      height={440}
                    />
                  </CardContent>
                </Card>
              </div>
              <div className=" flex justify-between mx-2 mt-2">
                <h1 className="font-medium text-base  truncate max-w-[70%]">
                  {item.title}
                </h1>
                <h2 className="font-medium text-base whitespace-nowrap">
                  {item.price}
                </h2>
              </div>
              <h3 className="ml-2 text-base w-[60%] text-[#757575]">
                {item.title2}
              </h3>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-2 md:right-14 right-14">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
