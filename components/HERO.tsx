import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white font-['Helvetica_Neue']">
      {/* Top Message */}
      <div className="bg-[#F5F5F5]">
        <div className="container mx-auto flex justify-center flex-col items-center py-4 text-center">
          <h3 className="text-base font-medium text-black">Hello Nike App</h3>
          <p className="text-xs text-black">
            <span>Download the app to access everything Nike.</span>{" "}
            <Link href="/" className="font-medium underline hover:text-black">
              Get Your Great
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto">
        <Image
          src="/Banner.png"
          alt="Nike Shoes"
          width={1344}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center py-10">
        <p className="text-base text-black">First Look</p>
        <h2 className="text-4xl lg:text-6xl font-normal text-black uppercase py-2">
          Nike Air Max Pulse
        </h2>
        <p className="text-base text-black leading-6 max-w-xl py-3 px-2">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Button className="px-6 py-2 bg-black text-white hover:bg-gray-800">
            Notify Me
          </Button>
          <Button className="px-6 py-2 bg-black text-white hover:bg-gray-800">
            Shop Air Max
          </Button>
        </div>
      </div>
    </section>
  );
}
