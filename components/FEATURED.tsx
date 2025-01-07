import { Button } from "./ui/button";

export default function Featured() {
  return (
    <section className="container mx-auto py-8 font-['Helvetica_Neue'] relative">
      <main className="m-4 ">
        {/* Section Header */}
        <div>
          <h1 className="font-medium text-2xl mb-4">Featured</h1>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src="/Featured.png"
            alt="Runner in shoes"
            className="w-full h-auto"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col justify-center items-center gap-4 text-center mt-6">
          <h2 className="text-3xl lg:text-6xl font-normal uppercase">
            Step into what feels good
          </h2>
          <p className="text-black text-base lg:text-base leading-6 lg:w-[50%] w-[80%]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <Button className="px-6 py-3 bg-black text-white hover:bg-gray-800 text-base font-medium rounded-full">
            Find Your Shoe
          </Button>
        </div>
      </main>
    </section>
  );
}
