import { Navbar } from "@/components/navbar";
import HeroParallax from "@/components/HeroParallax/HeroParallax";
import Story from "@/components/Story/Story";
import Crew from "@/components/Crew/Crew";
import Calander from "@/components/Calander/Calander";
import AffiliatedBands from "@/components/Bands/AffiliatedBands";

export default function Home() {
  return (
    <div className="mmin-h-screen">
      <div className="w-full relative">
        <div className="w-screen fixed top-0 left-0 z-50">
          <Navbar className={"w-full "} />
        </div>

        <HeroParallax />
      </div>

      <div className="mx-[15%] my-[100px]">
        <Story />
        <Crew />
        <Calander />
        <AffiliatedBands />
      </div>
    </div>
  );
}
