"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  return (
    <main className="max-w-[1200px] mx-auto my-10 px-4">
      {/* Free Delivery Banner */}
      <div className="bg-gray-100 p-4 text-sm text-gray-600 flex justify-between items-center">
        <p>
          Free Delivery <br />
          <span className="text-black">
            Applies to orders of ₹ 14,000.00 or more.
          </span>
        </p>
        <Link href="#" className="text-black underline">
          View details
        </Link>
      </div>

      {/* Checkout Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Bag Section */}
        <section className="flex-1">
          <h1 className="text-lg font-semibold mb-6">Bag</h1>

          {/* Product 1 */}
          <div className="flex items-start justify-between border-b py-6">
            <div className="flex gap-4">
              <Image
                src="/g1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={100}
                height={100}
                className="object-cover"
              />
              <div>
                <h2 className="text-sm font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h2>
                <p className="text-sm text-gray-500">
                  Men's Short-Sleeve Running Top
                </p>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm text-gray-500">Size: L</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>

                <div className="flex gap-2 justify-start mt-4">
                  <FaRegHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">MRP: ₹ 3,895.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-start justify-between border-b py-6">
            <div className="flex gap-4">
              <Image
                src="/g2.png"
                alt="Nike Air Max 97 SE"
                width={100}
                height={100}
                className="object-cover"
              />
              <div>
                <h2 className="text-sm font-semibold">Nike Air Max 97 SE</h2>
                <p className="text-sm text-gray-500">Men's Shoes</p>
                <p className="text-sm text-gray-500">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <p className="text-sm text-gray-500">Size: 8</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <div className="flex gap-2 justify-start mt-4">
                  <FaRegHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">MRP: ₹ 16,995.00</p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="w-full lg:w-[400px]">
          <h2 className="text-lg font-semibold mb-6">Summary</h2>
          <div className="flex justify-between text-sm mb-4">
            <p>Subtotal</p>
            <p>₹ 20,890.00</p>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-semibold mt-4 mb-6">
            <p>Total</p>
            <p>₹ 20,890.00</p>
          </div>
          <Button
            onClick={() => router.push("/order-summary")}
            className="px-6 py-6 bg-black text-white hover:bg-gray-800 w-full text-base"
          >
            Member Checkout
          </Button>
        </section>
      </div>
    </main>
  );
}
