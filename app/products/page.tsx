"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { productsData } from "@/data/products";
import { LuSettings2 } from "react-icons/lu";

export default function Products() {
  const [filter, setFilter] = useState<string | null>(null);

  // Filter products based on selected tag
  const filteredProducts = filter
    ? productsData.filter((product) => product.tags.includes(filter))
    : productsData;

  return (
    <main className="my-20 max-w-[1300px] mx-auto flex gap-x-8 font-['Helvetica_Neue']">
      {/* Sidebar */}
      <section className="flex flex-col max-w-[250px]">
        <h1 className="font-medium text-2xl mb-4">New (500)</h1>

        {/* Categories */}
        <div className="space-y-2 text-black text-sm">
          {[
            { label: "All", tag: null },
            { label: "Shoes", tag: "shoes" },
            { label: "Sports Bras", tag: "sports-bras" },
            { label: "Tops & T-Shirts", tag: "tops-tshirts" },
            { label: "Hoodies & Sweatshirts", tag: "hoodies-sweatshirts" },
            { label: "Jackets", tag: "jackets" },
            { label: "Trousers & Tights", tag: "trousers-tights" },
            { label: "Shorts", tag: "shorts" },
            { label: "Tracksuits", tag: "tracksuits" },
            { label: "Jumpsuits & Rompers", tag: "jumpsuits-rompers" },
            { label: "Skirts & Dresses", tag: "skirts-dresses" },
            { label: "Socks", tag: "socks" },
            { label: "Accessories & Equipment", tag: "accessories-equipment" },
          ].map(({ label, tag }) => (
            <button
              key={label}
              onClick={() => setFilter(tag)}
              className={`block text-left ${
                filter === tag ? "text-black font-semibold" : "hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-10">
          <hr />
          <div className="mt-4">
            <h1 className="font-semibold flex justify-between items-center text-sm">
              Gender
              <IoIosArrowUp />
            </h1>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              {["Men", "Women", "Unisex"].map((gender, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <hr />
            <h1 className="font-semibold flex justify-between items-center text-sm mt-4">
              Kids
              <IoIosArrowUp />
            </h1>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              {["Boys", "Girls"].map((kids, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {kids}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <hr />
            <h1 className="font-semibold flex justify-between items-center text-sm mt-4">
              Sort By Price
              <IoIosArrowUp />
            </h1>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              {["Under ₹2,500.00", "₹2,501.00 - ₹7,500.00"].map(
                (price, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {price}
                  </label>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex-1">
        {/* Top Controls */}
        <div className="flex justify-end items-center mb-6 gap-6">
          <h1 className="flex items-center gap-2 font-medium text-sm">
            Hide Filters <LuSettings2 size={14} />
          </h1>
          <h2 className="flex items-center gap-2 font-medium text-sm">
            Sort By <RiArrowDropDownLine size={25} />
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4">
              <Link href={`/products/details?id=${product.id}`}>
                <div className="relative w-full h-52">
                  <Image
                    src={product.img.src}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
                <p className="text-xs text-gray-600">{product.subTitle}</p>
                <p className="text-sm font-semibold mt-1">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
