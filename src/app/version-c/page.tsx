import Header from "@/components-c/Header";
import Hero from "@/components-c/Hero";
import Pillars from "@/components-c/Pillars";
import Results from "@/components-c/Results";
import HowItWorks from "@/components-c/HowItWorks";
import FAQ from "@/components-c/FAQ";
import Contact from "@/components-c/Contact";
import Footer from "@/components-c/Footer";

export default function VersionC() {
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
