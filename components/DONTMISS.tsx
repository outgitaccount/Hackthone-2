import { Button } from "./ui/button";

export default function DontMiss() {
  return (
    <section className="container mx-auto py-8 font-['Helvetica_Neue'] relative">
      <main className="m-4 ">
        {/* Section Header */}
        <div>
          <h1 className="font-medium text-2xl mb-4">Don't Miss</h1>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src="/DontMiss.png"
            alt="Runner in shoes"
            className="w-full h-auto"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col justify-center items-center gap-4 text-center mt-6">
          <h2 className="text-3xl lg:text-6xl font-normal uppercase">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-black text-base lg:text-base leading-6 lg:w-[50%] w-[80%]">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <Button className="px-6 py-3 bg-black text-white hover:bg-gray-800 text-base font-medium rounded-full">
            Shop
          </Button>
        </div>
      </main>
    </section>
  );
}
