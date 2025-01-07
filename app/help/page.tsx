"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

export default function HelpPage() {
  return (
    <main className="container mx-auto px-4 py-12 font-['Helvetica_Neue']">
      <section className="text-center">
        {/* Header Section */}
        <h1 className="text-3xl font-normal mb-4">GET HELP</h1>
        <div className="max-w-lg mx-auto flex items-center border border-gray-300 rounded-md px-4 py-2">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full border-none outline-none text-sm py-2"
          />
          <FiSearch className="text-gray-500" />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-sm text-gray-700 leading-6 mb-4">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-none space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-6 flex items-center ml-4">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li className="text-base text-gray-700 leading-6 flex items-center ml-4">
              If you enter your PAN information at checkout, you&apos;ll be able to
              pay for your order with PayTM or a local credit or debit card.
            </li>
            <li className="text-base text-gray-700 leading-6 flex items-center ml-4">
              Apple Pay
            </li>
          </ul>
          <p className="text-sm text-gray-700 leading-6 mb-6">
            <Link href="#" className="text-black hover:underline">
              Nike Members
            </Link>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you&apos;re not already a Member,{" "}
            <Link href="#" className="text-black hover:underline">
              join us
            </Link>{" "}
            today.
          </p>
          <div className="flex gap-4 mb-6">
            <Button className="bg-black text-white px-6 py-2">JOIN US</Button>
            <Button className="bg-black text-white px-6 py-2">SHOP NIKE</Button>
          </div>

          {/* FAQs Section */}
          <div className="mt-12">
            <h2 className="text-lg font-bold mb-4">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-sm">
                  Does my card need international purchases enabled?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </p>
                <p className="text-sm text-gray-700">
                  Please note, some banks may charge a{" "}
                  <span className="italic">small transaction fee</span> for
                  international orders.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  Can I pay for my order with multiple methods?
                </h3>
                <p className="text-sm text-gray-700">
                  No, payment for Nike orders can&apos;t be split between multiple
                  payment methods.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  What payment method is accepted for SNKRS orders?
                </h3>
                <p className="text-sm text-gray-700">
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  Why don&apos;t I see Apple Pay as an option?
                </h3>
                <p className="text-sm text-gray-700">
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you&apos;ll need to use a compatible Apple device running the
                  latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you&apos;ll need to
                  use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>
            {/* "Was this answer helpful?" Section */}
            <div className="mt-6 flex items-center space-x-4">
              <p className="text-sm font-medium text-gray-700">
                Was this answer helpful?
              </p>
              <div className="flex items-center space-x-2">
                <button className="text-gray-700 hover:text-black">👍</button>
                <button className="text-gray-700 hover:text-black">👎</button>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                RELATED
              </h3>
              <ul className="list-none space-y-2 ml-4">
                <li>
                  <Link href="#" className="text-sm text-black hover:underline">
                    WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-black hover:underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 border-l-2 border-gray-200">
          <h2 className="text-lg font-bold mb-6 text-center">CONTACT US</h2>
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex flex-col items-center text-center gap-2">
              <IoIosPhonePortrait className="text-black text-6xl" />
              <div>
                <h3 className="font-bold text-sm">000 800 919 0566</h3>
                <p className="text-sm text-gray-600">
                  Products &amp; Orders: 24 hours a day,
                </p>
                <p className="text-sm text-gray-600">7 days a week</p>
                <p className="text-sm text-gray-600">
                  Company Info &amp; Enquiries: 07:30
                </p>
                <p className="text-sm text-gray-600">
                  - 16:30, Monday - Friday
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center gap-2">
              <RiMessage2Fill className="text-black text-6xl" />
              <p className="font-bold text-sm">24 hours a day</p>
              <p className="text-sm text-gray-600">7 days a week</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center gap-2">
              <MdEmail className="text-black text-6xl" />
              <p className="font-bold text-sm">We&apos;ll reply within</p>
              <p className="text-sm text-gray-600">five business days</p>
            </div>

            {/* Store Locator */}
            <div className="flex flex-col items-center text-center">
              <MdLocationPin className="text-black text-6xl" />
              <h3 className="font-bold text-sm">STORE LOCATOR</h3>
              <p className="text-sm text-gray-600">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
