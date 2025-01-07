"use client";
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
import { products } from "@/data/detail"; // Import the consolidated data

export function CarouselSize() {
  // Filter airMax products using the "airmax" tag
  const airMaxProducts = products.filter((product) =>
    product.tags.includes("airmax")
  );

  return (
    <section className="container mx-auto py-8 font-['Helvetica_Neue'] relative">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6 px-2">
        <h2 className="text-2xl font-medium mt-2">Best of Air Max</h2>
        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/"
            className="lg:mr-28 text-sm text-black hover:underline"
          >
            Shop
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {airMaxProducts.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              {/* Link to Product Detail Page */}
              <Link href={`/productDetail?id=${item.id}`}>
                <div className="p-1">
                  <Card className="shadow-none border-none">
                    <CardContent className="bg-[#F5F5F5] aspect-square group">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={440}
                        height={440}
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-between mx-2 mt-2">
                  <h1 className="font-medium text-base">{item.title}</h1>
                  <h2 className="font-medium text-base">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-sm text-[#757575] mt-1">
                  {item.title2}
                </h3>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation */}
        <div className="absolute bottom-4 right-14 lg:top-8">
          <CarouselPrevious className="bottom-0 top-5" />
          <CarouselNext className="bottom-0 top-5" />
        </div>
      </Carousel>
    </section>
  );
}
