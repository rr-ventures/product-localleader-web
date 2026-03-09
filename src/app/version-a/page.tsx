import Header from "@/components-a/Header";
import Hero from "@/components-a/Hero";
import Pillars from "@/components-a/Pillars";
import Results from "@/components-a/Results";
import HowItWorks from "@/components-a/HowItWorks";
import FAQ from "@/components-a/FAQ";
import Contact from "@/components-a/Contact";
import Footer from "@/components-a/Footer";

export default function VersionA() {
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
