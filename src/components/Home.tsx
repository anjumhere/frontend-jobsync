import Navbar from "./Navbar";
import Hero from "./Hero";
import LogoStrip from "./Logostrip";
import Stats from "./Stats";
import HowItWorks from "./Howitworks";
import Categories from "./Categories";
import Testimonials from "./Testimonials";
import CtaBanner from "./Ctabanner";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Sections below the hero share the hero's side padding */}
      <div className="bg-[#fffefe] px-5 sm:px-8">
        <LogoStrip />
        <Stats />
        <HowItWorks />
        <Categories />
        <Testimonials />
        <CtaBanner />
      </div>
      <Footer />
    </>
  );
}
