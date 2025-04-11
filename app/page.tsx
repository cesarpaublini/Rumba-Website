import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PartyExperienceSection from '@/components/PartyExperienceSection';
import FAQsection from '@/components/FAQsection';
import RiderReviewsSection from '@/components/RiderReviewsSection';
import BrandLogosMarquee from '@/components/BrandLogosMarquee';
import BookingPopup from '@/components/bookingPopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Hero />
      <HowItWorks />
      <PartyExperienceSection />
      <FAQsection />
      <RiderReviewsSection />
      <BrandLogosMarquee />
        
    </main>
  );
}
