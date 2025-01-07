"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OrderSummaryPage() {
  const [country, setCountry] = useState("India");

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="flex flex-col lg:flex-row mx-auto  justify-center gap-12 lg:w-2/3">
        {/* Left Section */}
        <div className="lg:w-2/3">
          <h2 className="text-xl font-bold mb-4">
            How would you like to get your order?
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Customs regulation for India require a copy of the recipient's KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information.{" "}
            <a href="#" className=" underline">
              Learn More
            </a>
          </p>
          <Button className="flex items-center justify-center w-full py-3 mb-6 border border-black">
            Deliver It
          </Button>

          <h3 className="text-lg font-semibold mb-4">
            Enter your name and address:
          </h3>
          <div className="space-y-4">
            <Input type="text" placeholder="First Name" className="w-full" />
            <Input type="text" placeholder="Last Name" className="w-full" />
            <Input
              type="text"
              placeholder="Address Line 1"
              className="w-full"
            />
            <Input
              type="text"
              placeholder="Address Line 2"
              className="w-full"
            />
            <Input
              type="text"
              placeholder="Address Line 3"
              className="w-full"
            />
            <div className="flex space-x-4">
              <Input type="text" placeholder="Postal Code" className="w-1/2" />
              <Input type="text" placeholder="Locality" className="w-1/2" />
            </div>
            <div className="flex space-x-4">
              <Input
                type="text"
                placeholder="State/Territory"
                className="w-1/2"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-1/2 border border-gray-300 rounded-md p-2"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">
                Save this address to my profile
              </span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">
                Make this my preferred address
              </span>
            </label>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">
            What's your contact information?
          </h3>
          <Input type="email" placeholder="Email" className="w-full mb-4" />
          <Input type="text" placeholder="Phone Number" className="w-full" />

          <h3 className="text-lg font-semibold mt-8 mb-4">What's your PAN?</h3>
          <Input type="text" placeholder="PAN" className="w-full mb-4" />
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-sm text-gray-600">
              Save PAN details to Nike Profile
            </span>
          </label>

          <label className="flex items-start space-x-2 mt-6">
            <input type="checkbox" />
            <span className="text-sm text-gray-600">
              I have read and consent to eShopWorld processing my information in
              accordance with the{" "}
              <a href="#" className="underline">
                Privacy Statement
              </a>{" "}
              and{" "}
              <a href="#" className=" underline">
                Cookie Policy
              </a>
              .
            </span>
          </label>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3">
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              (The total reflects the price of your order, including all duties
              and taxes)
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">
              Arrives Mon, 27 Mar - Wed, 12 Apr
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/g1.png"
                  alt="Product Image"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <h4 className="text-sm font-bold">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h4>
                  <p className="text-xs text-gray-600">
                    Men's Short-Sleeve Running Top
                  </p>
                  <p className="text-xs text-gray-600">Size L, Qty 1</p>
                  <p className="text-sm font-bold">₹ 3,895.00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Image
                  src="/g2.png"
                  alt="Product Image"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <h4 className="text-sm font-bold">Nike Air Max 97 SE</h4>
                  <p className="text-xs text-gray-600">Men's Shoes</p>
                  <p className="text-xs text-gray-600">Size UK 8, Qty 1</p>
                  <p className="text-sm font-bold">₹ 16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
