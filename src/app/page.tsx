import AboutClinic from "../components/About";
import FAQSection from "../components/Faq";
import Footer from "../components/Footer";
import GalleryPage from "../components/GallerySlider";
import DentistHome from "../components/Hero";
import Navbar from "../components/Navbar";
import OurJourney from "../components/OurJourney";
import ServicesPage from "../components/Service";
import Testimonials from "../components/Testi";
import WhyChooseUs from "../components/WhyChoose";

export default function Home() {
  return (
    <div>
      <DentistHome />
      <AboutClinic />
      <WhyChooseUs />
      <ServicesPage />
      <GalleryPage />
      <OurJourney />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
