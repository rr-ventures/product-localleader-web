import Header from "@/components-b/Header";
import Hero from "@/components-b/Hero";
import Pillars from "@/components-b/Pillars";
import Results from "@/components-b/Results";
import HowItWorks from "@/components-b/HowItWorks";
import FAQ from "@/components-b/FAQ";
import Contact from "@/components-b/Contact";
import Footer from "@/components-b/Footer";

export default function VersionB() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Results />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
