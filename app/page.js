"use client";

import AboutSection from "../components/LandingPage/AboutSection";
import Blog from "../components/LandingPage/Blog";
import Faq from "../components/LandingPage/Faq";
import HeroSection from "../components/LandingPage/HeroSection";
import OurTeam from "../components/LandingPage/OurTeam";
import PricingSection from "../components/LandingPage/PricingSection";
import WhyChooseCompany from "../components/LandingPage/WhyChooseCompany";





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
