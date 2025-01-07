import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

export default function Nav() {
  return (
    <header className="border-gray-300 font-['Helvetica_Neue']">
      {/* Top bar (Visible only on large screens) */}
      <div className="hidden md:block bg-[#F5F5F5]">
        <div className="container mx-auto flex justify-between items-center px-6 py-2 text-[12px] font-medium text-gray-700">
          <Link href="/">
            <Image src={"/logo1.png"} alt="Logo" width={24} height={24} />
          </Link>

          <div className="flex gap-4 items-center">
            <Link href="/locate" className="hover:text-black">
              Find a Store
            </Link>
            <div className="h-[14px] w-[1px] bg-gray-400" />
            <Link href="/help" className="hover:text-black">
              Help
            </Link>
            <div className="h-[14px] w-[1px] bg-gray-400" />
            <Link href="/joinus" className="hover:text-black">
              Join Us
            </Link>
            <div className="h-[14px] w-[1px] bg-gray-400" />
            <Link href="/login" className="hover:text-black">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={"/nike-logo.png"}
                alt="Nike Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium text-[15px] leading-[24px]">
            <Link href="/products" className="hover:text-black">
              New & Featured
            </Link>
            <Link href="/products" className="hover:text-black">
              Men
            </Link>
            <Link href="/products" className="hover:text-black">
              Women
            </Link>
            <Link href="/products" className="hover:text-black">
              Kids
            </Link>
            <Link href="/products" className="hover:text-black">
              Sale
            </Link>
            <Link href="/products" className="hover:text-black">
              SNKRS
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <IoSearch className="text-2xl absolute left-2 top-[6px] text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#F5F5F5] rounded-full pr-2 pl-10 py-2 text-[15px] focus:outline-none"
              />
            </div>
            {/* Icons */}
            <Link href="/checkout" className="hover:text-black">
              <FaRegHeart className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black" />
            </Link>
            <Link href="/checkout" className="hover:text-black">
              <BsBag className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden bg-white px-6 py-2">
        <div className="container mx-auto relative">
          <IoSearch className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="rounded-full pr-2 pl-10 py-2 text-sm w-full focus:outline-none"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-white px-6 py-4 md:hidden">
        <div className="container mx-auto flex justify-between text-[15px] font-medium text-gray-700">
          <Link href="/featured" className="hover:text-black">
            New
          </Link>
          <Link href="/men" className="hover:text-black">
            Men
          </Link>
          <Link href="/women" className="hover:text-black">
            Women
          </Link>
          <Link href="/kids" className="hover:text-black">
            Kids
          </Link>
          <Link href="/sale" className="hover:text-black">
            Sale
          </Link>
          <Link href="/snkrs" className="hover:text-black">
            SNKRS
          </Link>
        </div>
      </div>
    </header>
  );
}
