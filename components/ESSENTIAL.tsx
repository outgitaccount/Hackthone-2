import Image from "next/image";

export default function Essential() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <div>
        <h2 className="font-semibold text-2xl mb-6">The Essentials</h2>
      </div>

      {/* Grid of Images with Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative group">
          <Image
            width={400}
            height={400}
            alt="Men&apos;s Essentials"
            src="/e1.png"
            className="w-full object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-medium text-sm px-4 py-2 rounded-full shadow-md group-hover:scale-105 transition-transform">
            Men&apos;s
          </button>
        </div>

        <div className="relative group">
          <Image
            width={400}
            height={400}
            alt="Women&apos;s Essentials"
            src="/e2.png"
            className="w-full object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-medium text-sm px-4 py-2 rounded-full shadow-md group-hover:scale-105 transition-transform">
            Women&apos;s
          </button>
        </div>

        <div className="relative group">
          <Image
            width={400}
            height={400}
            alt="Kids&apos; Essentials"
            src="/e3.png"
            className="w-full object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-medium text-sm px-4 py-2 rounded-full shadow-md group-hover:scale-105 transition-transform">
            Kids&apos;
          </button>
        </div>
      </div>
    </section>
  );
}
