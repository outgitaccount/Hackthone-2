"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Joinn() {
  return (
    <main>
      <section className="my-20">
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
          {/* Nike Logo */}
          <Image src={"/logo2.png"} alt="Nike Logo" width={65} height={35} />

          {/* Title */}
          <h1 className="font-bold text-lg mt-4 tracking-wide">
            BECOME A NIKE MEMBER
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm text-center mt-3 max-w-xs">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>

          {/* Form Inputs */}
          <div className="flex flex-col justify-center items-center gap-4 mt-6 w-full max-w-xs">
            <Input type="email" placeholder="Email address" className="w-full" />
            <Input type="password" placeholder="Password" className="w-full" />
            <Input type="text" placeholder="First Name" className="w-full" />
            <Input type="text" placeholder="Last Name" className="w-full" />
            <Input type="date" placeholder="Date of Birth" className="w-full" />
            <p className="text-gray-500 text-xs text-center">
              Get a Nike Member Reward every year on your Birthday.
            </p>

            {/* Country Dropdown */}
            <select
              className="w-full h-10 border rounded-md px-3 text-gray-500"
              defaultValue="Pakistan"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>

            {/* Gender Options */}
            <div className="flex justify-between gap-4 w-full">
              <Button variant="outline" className="w-full text-gray-500">
                Male
              </Button>
              <Button variant="outline" className="w-full text-gray-500">
                Female
              </Button>
            </div>
          </div>

          {/* Email Signup Checkbox */}
          <div className="flex items-start gap-2 mt-6 w-full max-w-xs">
            <input
              type="checkbox"
              className="mt-1"
            />
            <p className="text-gray-500 text-xs ">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </p>
          </div>

          {/* Terms & Conditions */}
          <p className="text-gray-500 text-xs text-center mt-6 w-2/3">
            By creating an account, you agree to Nike&apos;s{" "}
            <Link href="#">
              <u className="text-black">Privacy Policy</u>
            </Link>{" "}
            and{" "}
            <Link href="#">
              <u className="text-black">Terms of Use</u>
            </Link>
          </p>

          {/* Join Us Button */}
          <Button className="w-full max-w-xs mt-6 bg-black text-white rounded-md">
            JOIN US
          </Button>

          {/* Already a Member */}
          <p className="text-gray-500 text-xs mt-4">
            Already a Member?{" "}
            <Link href="/login">
              <u className="text-black">Sign In</u>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
