import HeroParallax from "../../components/HeroParallax/HeroParallax";
import Story from "../../components/Story/Story";
import Calander from "../../components/Calander/Calander";
import AffiliatedBands from "../../components/Bands/AffiliatedBands";
import Icons from "../../components/Icons/Icons";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full relative">
        <HeroParallax />
      </div>

      <div className="mx-[10%] md:mx-[15%] my-[100px]">
        <Icons />
        <Story />
        <Calander />
        <AffiliatedBands />
      </div>
    </div>
  )
}

export default Home