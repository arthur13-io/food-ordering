import Header from "../src/header/Header";
import AngwamoSection from "./AngwamoSection";
import BuffaloWingSection from "./BuffaloWingsSection";
import CheeseSection from "./CheeseSection";
import DessertsSection from "./DesertsSection";
import FoodOfTheMonthSection from "./FoodOfTheMonthSection";
import Footer from "./Footer";
import HandHeldSection from "./HandHeldSection";
import JollofSection from "./JollofSection";
import KidsSection from "./KidsSection";
import MenuSection from "./MenuSection";
import PastaSection from "./PastaSection";
import SaladSection from "./SaladSection";
import ShareableSection from "./ShareableSection";
import SoupSection from "./SoupSection";
import StewsSection from "./Stews";
import VeganSection from "./VeganSection";


export default function App(){
  return(
    <>
    <Header/>
    <MenuSection/>
    <VeganSection/>
    <FoodOfTheMonthSection/>
    <ShareableSection/>
    <BuffaloWingSection/>
    <PastaSection/>
    <SaladSection/>
    <SoupSection/>
    <CheeseSection/>
    <AngwamoSection/>
    <JollofSection/>
    <StewsSection/>
    <HandHeldSection/>
    <DessertsSection/>
    <KidsSection/>
    <Footer/>
    </>
  );
}