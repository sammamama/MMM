import HeroParallax from "@/components/HeroParallax/HeroParallax";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-[400vh] ">
      <div className="h-screen w-full relative overflow-hidden">
        <div className="w-screen fixed top-0 left-0 z-50">
          <Navbar className={"w-full "} />
        </div>

        <HeroParallax />
      </div>

      <div className="h-[200vh]"></div>
      {/* </div> */}
    </div>
  );
}
