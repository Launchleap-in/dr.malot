import AboutClinic from "../components/About";
import AppointmentSection from "../components/ContactForm";
import FAQSection from "../components/Faq";
import GalleryPage from "../components/GallerySlider";
import DentistHome from "../components/Hero";
import OurJourney from "../components/OurJourney";
import ServicesPage from "../components/Service";
import MeetOurTeam from "../components/team";
import Testimonials from "../components/Testi";
import WhyChooseUs from "../components/WhyChoose";

export default function Home() {
  return (
    <div>
      <DentistHome />
      <AboutClinic />
      <AppointmentSection />
      <MeetOurTeam />
      <WhyChooseUs />
      <ServicesPage />
      <GalleryPage />
      <OurJourney />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
