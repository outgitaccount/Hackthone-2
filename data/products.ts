import { StaticImageData } from "next/image";

interface Product {
  id: number;
  img: StaticImageData;
  title: string;
  subTitle: string;
  price: string;
  category: string; // Shoes, Sports Bras, Tops & T-Shirts, etc.
  gender: string | null; // Men, Women, Unisex
  kids: string | null; // Boys, Girls, or null
  priceRange: string; // "Under ₹ 2 500.00" or "₹ 2 501.00 - ₹ 7 500.00"
  description: string;
  tags: string[];
}

import img1 from "../public/products/img1.png";
import img2 from "../public/products/img2.png";
import img3 from "../public/products/img3.png";
import img4 from "../public/products/img4.png";
import img5 from "../public/products/img5.png";
import img6 from "../public/products/img6.png";
import img7 from "../public/products/img7.png";
import img8 from "../public/products/img8.png";
import img9 from "../public/products/img9.png";
import img10 from "../public/products/img10.png";
import img11 from "../public/products/img11.png";
import img12 from "../public/products/img12.png";
import img13 from "../public/products/img13.png";
import img14 from "../public/products/img14.png";
import img15 from "../public/products/img15.png";
import img16 from "../public/products/img16.png";
import img17 from "../public/products/img17.png";
import img18 from "../public/products/img18.png";
import img19 from "../public/products/img19.png";
import img20 from "../public/products/img20.png";
import img21 from "../public/products/img21.png";
import img22 from "../public/products/img22.png";
import img23 from "../public/products/img23.png";
import img24 from "../public/products/img24.png";
import img25 from "../public/products/img25.png";
import img26 from "../public/products/img26.png";
import img27 from "../public/products/img27.png";
import img28 from "../public/products/img28.png";
import img29 from "../public/products/img29.png";
import img30 from "../public/products/img30.png";

export const productsData: Product[] = [
  // Shoes
  {
    id: 1,
    img: img1,
    title: "Nike Air Force 1 Mid '07",
    subTitle: "Men's Shoes",
    price: "₹ 10 795.00",
    category: "Shoes",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "A modern take on the classic Air Force 1 silhouette.",
    tags: ["just-in", "shoes", "men"],
  },
  {
    id: 2,
    img: img2,
    title: "Nike Blazer Low Platform",
    subTitle: "Women's Shoes",
    price: "₹ 8 195.00",
    category: "Shoes",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Platform sneakers with a sleek and modern design.",
    tags: ["just-in", "shoes", "women"],
  },
  {
    id: 3,
    img: img3,
    title: "Nike Dunk Low Retro",
    subTitle: "Men's Shoes",
    price: "₹ 9 695.00",
    category: "Shoes",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Bold, retro-style sneakers with premium comfort.",
    tags: ["just-in", "shoes", "men"],
  },

  // Sports Bras
  {
    id: 4,
    img: img4,
    title: "Nike Alate All U",
    subTitle: "Women's Light-Support Printed Sports Bra",
    price: "₹ 2 195.00",
    category: "Sports Bras",
    gender: "Women",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Light support with stylish design for everyday comfort.",
    tags: ["just-in", "sports-bras", "women"],
  },

  // Tops & T-Shirts
  {
    id: 5,
    img: img5,
    title: "Nike Dri-FIT UV Hyverse",
    subTitle: "Men's Short-Sleeve Graphic Fitness Top",
    price: "₹ 2 495.00",
    category: "Tops & T-Shirts",
    gender: "Men",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Stay cool and dry with Dri-FIT technology.",
    tags: ["sustainable-materials", "tops", "men"],
  },
  {
    id: 6,
    img: img6,
    title: "Nike Swoosh Tank",
    subTitle: "Women's Medium-Support Padded Bra",
    price: "₹ 3 095.00",
    category: "Tops & T-Shirts",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Comfortable and supportive tank with a sleek design.",
    tags: ["just-in", "tops", "women"],
  },

  // Shorts
  {
    id: 7,
    img: img7,
    title: "Nike Dri-FIT Challenger",
    subTitle: "Men's 18cm (approx.) 2-in-1 Shorts",
    price: "₹ 2 495.00",
    category: "Shorts",
    gender: "Men",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Versatile shorts for all training activities.",
    tags: ["just-in", "shorts", "men"],
  },
  {
    id: 8,
    img: img8,
    title: "Nike Sportswear Trend",
    subTitle: "Older Kids' High-Waisted Woven Shorts",
    price: "₹ 2 495.00",
    category: "Shorts",
    gender: null,
    kids: "Girls",
    priceRange: "Under ₹ 2 500.00",
    description: "Comfortable and trendy shorts for active kids.",
    tags: ["shorts", "kids", "girls"],
  },

  // Hoodies & Sweatshirts
  {
    id: 9,
    img: img9,
    title: "Nike Sportswear Hoodie",
    subTitle: "Men's Pullover Hoodie",
    price: "₹ 4 995.00",
    category: "Hoodies & Sweatshirts",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Soft, warm hoodie for everyday comfort.",
    tags: ["hoodies", "men"],
  },

  // Accessories & Equipment
  {
    id: 10,
    img: img10,
    title: "Nike Gym Sack",
    subTitle: "Training Bag",
    price: "₹ 1 495.00",
    category: "Accessories & Equipment",
    gender: "Unisex",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Lightweight and durable gym sack for all your needs.",
    tags: ["accessories", "unisex"],
  },
  {
    id: 11,
    img: img11,
    title: "Nike Air Max SC",
    subTitle: "Men's Shoes",
    price: "₹ 5 995.00",
    category: "Shoes",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "A versatile design with classic Air Max comfort.",
    tags: ["just-in", "shoes", "men"],
  },
  {
    id: 12,
    img: img12,
    title: "Nike Court Legacy Lift",
    subTitle: "Women's Shoes",
    price: "₹ 7 495.00",
    category: "Shoes",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Elevate your everyday look with these stylish sneakers.",
    tags: ["just-in", "shoes", "women"],
  },
  {
    id: 13,
    img: img13,
    title: "Nike Pro Dri-FIT",
    subTitle: "Men's Tight-Fit Sleeveless Top",
    price: "₹ 1 495.00",
    category: "Tops & T-Shirts",
    gender: "Men",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Breathable, lightweight top for intense workouts.",
    tags: ["just-in", "tops", "men"],
  },
  {
    id: 14,
    img: img14,
    title: "Nike Air Max 90",
    subTitle: "Men's Shoes",
    price: "₹ 9 995.00",
    category: "Shoes",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "A timeless Air Max classic with modern updates.",
    tags: ["just-in", "shoes", "men"],
  },
  {
    id: 15,
    img: img15,
    title: "Nike Blazer Low '77 Jumbo",
    subTitle: "Women's Shoes",
    price: "₹ 8 595.00",
    category: "Shoes",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Retro-inspired design with jumbo Swoosh detailing.",
    tags: ["just-in", "shoes", "women"],
  },
  {
    id: 16,
    img: img16,
    title: "Nike SB Force 58",
    subTitle: "Men's Skate Shoes",
    price: "₹ 6 995.00",
    category: "Shoes",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Durable skate shoes for street-ready style.",
    tags: ["just-in", "shoes", "men"],
  },
  {
    id: 17,
    img: img17,
    title: "Nike Dri-FIT UV Miler",
    subTitle: "Men's Running Top",
    price: "₹ 1 695.00",
    category: "Tops & T-Shirts",
    gender: "Men",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Lightweight and breathable for long runs.",
    tags: ["just-in", "tops", "men"],
  },
  {
    id: 18,
    img: img18,
    title: "Nike Air Max System",
    subTitle: "Older Kids' Shoes",
    price: "₹ 6 495.00",
    category: "Shoes",
    gender: null,
    kids: "Boys",
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Classic Air Max cushioning for active kids.",
    tags: ["just-in", "shoes", "kids"],
  },
  {
    id: 19,
    img: img19,
    title: "Nike SB Zoom Janoski OG+",
    subTitle: "Skate Shoes",
    price: "₹ 8 595.00",
    category: "Shoes",
    gender: "Unisex",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Premium skate shoes for ultimate performance.",
    tags: ["just-in", "shoes", "unisex"],
  },
  {
    id: 20,
    img: img20,
    title: "Nike Dri-FIT Run Division",
    subTitle: "Men's Running Tank",
    price: "₹ 3 495.00",
    category: "Tops & T-Shirts",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Stay cool and dry during intense runs.",
    tags: ["just-in", "tops", "men"],
  },
  {
    id: 21,
    img: img21,
    title: "Nike One Leak Protection",
    subTitle: "Women's Biker Shorts",
    price: "₹ 3 395.00",
    category: "Shorts",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Supportive biker shorts with added protection.",
    tags: ["just-in", "shorts", "women"],
  },
  {
    id: 22,
    img: img22,
    title: "Nike Air Force 1 LV8 3",
    subTitle: "Older Kids' Shoes",
    price: "₹ 7 495.00",
    category: "Shoes",
    gender: null,
    kids: "Boys",
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Classic design with fun updates for kids.",
    tags: ["just-in", "shoes", "kids"],
  },
  {
    id: 23,
    img: img23,
    title: "Nike Outdoor Play",
    subTitle: "Older Kids' Woven Jacket",
    price: "₹ 3 895.00",
    category: "Jackets",
    gender: null,
    kids: "Girls",
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Lightweight and durable for outdoor adventures.",
    tags: ["jackets", "kids", "girls"],
  },
  {
    id: 24,
    img: img24,
    title: "Nike Sportswear Windrunner",
    subTitle: "Men's Windbreaker Jacket",
    price: "₹ 4 995.00",
    category: "Jackets",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Iconic windbreaker with a sleek design.",
    tags: ["jackets", "men"],
  },
  {
    id: 25,
    img: img25,
    title: "Nike Essential Pullover Hoodie",
    subTitle: "Women's Hoodie",
    price: "₹ 5 495.00",
    category: "Hoodies & Sweatshirts",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Stay cozy with this essential pullover hoodie.",
    tags: ["hoodies", "women"],
  },
  {
    id: 26,
    img: img26,
    title: "Nike Dri-FIT Strike",
    subTitle: "Men's Training Top",
    price: "₹ 2 995.00",
    category: "Tops & T-Shirts",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Designed for performance with breathable fabric.",
    tags: ["tops", "men"],
  },
  {
    id: 27,
    img: img27,
    title: "Nike Club Fleece Joggers",
    subTitle: "Men's Joggers",
    price: "₹ 3 995.00",
    category: "Trousers & Tights",
    gender: "Men",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Soft fleece joggers for everyday wear.",
    tags: ["trousers", "men"],
  },
  {
    id: 28,
    img: img28,
    title: "Nike Yoga Luxe",
    subTitle: "Women's Tights",
    price: "₹ 4 995.00",
    category: "Trousers & Tights",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "High-waisted tights with superior comfort.",
    tags: ["trousers", "women"],
  },
  {
    id: 29,
    img: img29,
    title: "Nike Academy Shorts",
    subTitle: "Men's Training Shorts",
    price: "₹ 1 995.00",
    category: "Shorts",
    gender: "Men",
    kids: null,
    priceRange: "Under ₹ 2 500.00",
    description: "Lightweight and breathable for all-day wear.",
    tags: ["shorts", "men"],
  },
  {
    id: 30,
    img: img30,
    title: "Nike Victory Swimwear",
    subTitle: "Women's Swimsuit",
    price: "₹ 5 995.00",
    category: "Accessories & Equipment",
    gender: "Women",
    kids: null,
    priceRange: "₹ 2 501.00 - ₹ 7 500.00",
    description: "Stylish swimsuit for pool and beach activities.",
    tags: ["accessories", "women"],
  },
  // Add more products up to 30 as required using this format
];
