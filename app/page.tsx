import Footer from "./components/widgets/Footer";
import Eligibility from "./components/widgets/LandingPage/Eligibility";
import FAQ from "./components/widgets/LandingPage/FAQ";
import Gains from "./components/widgets/LandingPage/Gains";
import Hero from "./components/widgets/LandingPage/Hero";
import NextStep from "./components/widgets/LandingPage/NextStep";
import WhoWeAre from "./components/widgets/LandingPage/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Gains />
      <Eligibility />
      <FAQ />
      <NextStep />
      <Footer />
    </main>
  );
}
