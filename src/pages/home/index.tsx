import AboutUsSection from "../AboutUsSection";
import EmergencyResponseSection from "./EmergencyResponseSection";
import GalleryCarousel from "./GalleryCarousel ";
import SupplyPosts from "./SupplyPosts";
import TestimonialsSection from "./TestimonialsSection";
import HeroSection from "./HeroSection";

const index = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <HeroSection />
      </div>
      <div>
        <SupplyPosts></SupplyPosts>
      </div>
      <div>
        <GalleryCarousel />
      </div>
      <div>
        <AboutUsSection></AboutUsSection>
      </div>
      <div>
        <EmergencyResponseSection />
      </div>
      <div>
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default index;
