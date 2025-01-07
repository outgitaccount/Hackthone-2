import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      {/* Top Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sign Up for Email
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Student Discounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us on Nike.com
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us on All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (Social Media Icons) */}
          <div className="flex gap-4">
            <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
            <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
            <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-6 text-sm text-gray-400">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Country and Copyright */}
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-lg" />
            <span>India</span>
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Footer Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Guides
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Sale
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
