import { GearCarousel1 } from "@/components/GearCarousel1";
import { GearCarousel2 } from "@/components/GearCarousel2";

export default function GearUp() {
  return (
    <section className="container mx-auto py-8 font-['Helvetica_Neue'] relative">
      <h1 className="font-medium text-2xl mb-3 px-2">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
        <GearCarousel1 />
        <GearCarousel2 />
      </div>
    </section>
  );
}
