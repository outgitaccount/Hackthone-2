"use client";
import { useRouter,useSearchParams } from "next/navigation";
import Image from "next/image";
import { productsData } from "@/data/products"; // Import consolidated products data
import { Button } from "@/components/ui/button";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  // Find the product by ID
  const product = productsData.find((item) => item.id === parseInt(id || ""));

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  return (
    <section className="container mx-auto px-4 py-12 font-poppins">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#F5F5F5] p-8">
            <Image
              src={product.img}
              alt={product.title}
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-medium">{product.title}</h1>
          <h2 className="text-2xl lg:text-3xl font-medium mb-4">
            {product.subTitle}
          </h2>
          <p className="text-black text-base leading-6 mb-6 lg:w-2/3">
            {product.description ||
              "No description available for this product."}
          </p>
          <h2 className="text-4xl font-medium mb-6">{product.price}</h2>
          <Button onClick={() => router.push("/checkout")}  className="flex items-center gap-2 px-6 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 rounded-full">
            <PiShoppingCartSimpleBold size={20} />
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}
