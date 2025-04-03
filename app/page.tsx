import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Hero />
      <HowItWorks />
    </main>
  );
}
