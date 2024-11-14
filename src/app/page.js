import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

export default function Page() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
