import Corousel from "./Components/Corousel";
import CtaCard from "./Components/CtaCard";
import Header from "./Components/Header";
import CTA from "./Pages/CTA";
import Features from "./Pages/Features";
import GettingStartNow from "./Pages/GettingStartNow";
import GettingStartNowSecound from "./Pages/GettingStartNowSecound";
import Stats from "./Pages/Stats";


const Home = () => {
  return (

    <div>
    <Corousel/>
    <CTA/>
    <Stats/>
    <GettingStartNow/>
    <GettingStartNowSecound/>
    <Features/>
    </div>
  )
};

export default Home;
