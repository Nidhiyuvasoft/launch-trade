"use client";

import AboutSection from "../components/LandingPage/AboutSection";
import Blog from "../components/LandingPage/Blog";
import Faq from "../components/LandingPage/Faq";
import HeroSection from "../components/LandingPage/HeroSection";
import OurTeam from "../components/LandingPage/OurTeam";
import PricingSection from "../components/LandingPage/PricingSection";
import WhyChooseCompany from "../components/LandingPage/WhyChooseCompany";
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/fontawesome.css"
import "../public/assets/css/cursor.css"
import "../public/assets/css/animate.min.css"
import "../public/assets/css/aos.css"
import "../public/assets/css/swiper-bundle.min.css"
import "../public/assets/css/magnific-popup.min.css"
import "../public/assets/css/odometer.min.css"
import "../public/assets/css/style.css"



const Page = () => {
  return(
    <>
      <HeroSection/>
      <AboutSection/>
      <WhyChooseCompany/>
      <PricingSection/>
      <Blog/>
      <Faq/>
      <OurTeam/>
    </>
  )
};

export default Page;
