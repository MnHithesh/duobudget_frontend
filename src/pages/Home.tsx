import FeaturesSection from "../components/Features";
import HeroBanner from "../components/HeroBanner";
import ProblemSection from "../components/ProblemStatement";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeroBanner />
      <FeaturesSection />
      <ProblemSection />
    </div>
  );
}