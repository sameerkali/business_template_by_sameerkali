import Corousel from "./Components/Corousel";
import LogoCorousel from "./Components/LogoCorousel";
import CTA from "./Pages/CTA";
import Features from "./Pages/Features";
import GettingStartNow from "./Pages/GettingStartNow";
import GettingStartNowSecound from "./Pages/GettingStartNowSecound";
import Stats from "./Pages/Stats";
import Testimonials from "./Pages/Testimonials";
import FeaturesTwo from "./Pages/FeaturesTwo";
import Footer from "./Components/Footer";


const Home = () => {
  return (

    <div>
    <Corousel/>
    <CTA/>
    <Stats/>
    <GettingStartNow/>
    <GettingStartNowSecound/>
    <Features/>
    <Testimonials/>
    <LogoCorousel/>
    <FeaturesTwo/>
    <Footer/>
    </div>
  )
};

export default Home;
