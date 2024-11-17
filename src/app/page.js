import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PaymentOptions from "./components/PaymentOptions";
import Services from "./components/Services";

export default function Page() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Feedback />
      <Services />
      <Gallery />
      <PaymentOptions />
      <Contact />
      <Footer />
    </div>
  );
}
