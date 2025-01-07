import { StaticImageData } from "next/image";

interface Items {
  id: number;
  img: StaticImageData;
  title: string;
  title2: string;
  price: string;
  description: string;
  tags: string[]; // Added for filtering
}

import Best1 from "../public/Best/b1.png";
import Best2 from "../public/Best/b2.png";
import Best3 from "../public/Best/b3.png";
import g1 from "../public/g1.png";
import g2 from "../public/g2.png";
import g3 from "../public/g3.png";
import g4 from "../public/g4.png";
import f1 from "../public/featured/shoe1.png";
import f2 from "../public/featured/shoe2.png";
import f3 from "../public/featured/shoe3.png";
import f4 from "../public/featured/shoe4.png";
import f5 from "../public/featured/shoe5.png";
import f6 from "../public/featured/shoe6.png";
import f7 from "../public/featured/shoe7.png";
import f8 from "../public/featured/shoe8.png";
import f9 from "../public/featured/shoe9.png";
import f10 from "../public/featured/shoe10.png";

export const products: Items[] = [
  // Air Max Products
  {
    id: 1,
    img: Best1,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    description:
      "Experience unparalleled comfort with the Nike Air Max Pulse. Designed for women who demand both style and performance, these shoes feature a breathable upper and iconic Air Max cushioning for all-day wearability.",
    tags: ["airmax", "women"],
  },
  {
    id: 2,
    img: Best2,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    description:
      "Push your limits with the Nike Air Max Pulse. These men's shoes combine modern design with classic Air Max technology, ensuring superior support and style in every step you take.",
    tags: ["airmax", "men"],
  },
  {
    id: 3,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    description:
      "Step into the future with the Nike Air Max 97 SE. Featuring a sleek, streamlined design and advanced cushioning, these shoes redefine comfort and elevate your sneaker game.",
    tags: ["airmax", "men"],
  },
  {
    id: 4,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    description:
      "The Nike Air Max 97 SE offers bold design and unmatched comfort. Perfect for any occasion, its unique style and advanced cushioning technology set it apart from the crowd.",
    tags: ["airmax", "men"],
  },

  // Gear 1 Products
  {
    id: 5,
    img: g1,
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    title2: "Men's Short-Sleeve Running Top",
    price: "₹ 3 895",
    description:
      "Elevate your daily runs with the Nike Dri-FIT ADV TechKnit Ultra. Built for men, this top offers superior breathability and comfort for every stride.",
    tags: ["gear1", "men"],
  },
  {
    id: 6,
    img: g2,
    title: "Nike Dri-FIT Challenger",
    title2: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2 495",
    description:
      "Made for the modern athlete, the Nike Dri-FIT Challenger shorts offer versatility and comfort for all types of training.",
    tags: ["gear1", "men"],
  },

  // Gear 2 Products
  {
    id: 7,
    img: g3,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    description:
      "The Nike Air Max Pulse for women delivers exceptional comfort and standout style. Its sleek design and responsive cushioning make it perfect for everyday wear.",
    tags: ["gear2", "women"],
  },
  {
    id: 8,
    img: g4,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    description:
      "Step up your game with the Nike Air Max Pulse. These men's shoes combine bold design and advanced cushioning to keep you comfortable and stylish all day long.",
    tags: ["gear2", "men"],
  },

  // Featured Products
  {
    id: 9,
    img: f1,
    title: "Nike Air Force 1 Mid '07",
    title2: "Men's Shoes",
    price: "₹ 10 995",
    description:
      "The Nike Air Force 1 Mid '07 is a modern take on a classic. With a premium leather upper and mid-cut collar for added support, it offers timeless style and exceptional comfort.",
    tags: ["feature", "men"],
  },
  {
    id: 10,
    img: f2,
    title: "Nike Court Vision Low Next Nature",
    title2: "Men's Shoes",
    price: "₹ 4 995",
    description:
      "Stay casual yet stylish with the Nike Court Vision Low Next Nature. Featuring eco-friendly materials and a classic design, these shoes are perfect for everyday wear.",
    tags: ["feature", "men"],
  },
  {
    id: 11,
    img: f3,
    title: "Nike Air Force 1 PLT.AF.ORM",
    title2: "Women's Shoes",
    price: "₹ 8 995",
    description:
      "The Nike Air Force 1 PLT.AF.ORM blends modern aesthetics with iconic design. Its elevated sole and bold details make it a must-have for any sneaker enthusiast.",
    tags: ["feature", "women"],
  },
];
