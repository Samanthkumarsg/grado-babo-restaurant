import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PaymentOptions from "./components/PaymentOptions";
import Services from "./components/Services";
import CusineSection from "./components/CusineSection";
import WineSection from "./components/WineSection";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import BookSpecialMenu from "./components/BookSpecialMenu";
import CookieConsentBanner from "./components/CookieConsentBanner";


export default function Page() {
  return (
    <div className="">
      {/* <Header /> */}
      <Hero />
      {/* <HeroSection /> */}
      <Feedback />
      <CusineSection />
      <BookSpecialMenu />
      <WineSection />
      <Booking />
      <Services />
      <About />
      {/* <Gallery /> */}
      <PaymentOptions />
      <Contact />
      <Footer />
      {/* <CookieConsentBanner /> */}
    </div>
  );
}
