import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhenToHelp } from "@/components/sections/WhenToHelp";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Portfolio } from "@/components/sections/Portfolio";
import { CaseIntro } from "@/components/sections/CaseIntro";
import { Problem } from "@/components/sections/Problem";
import { Shift } from "@/components/sections/Shift";
import { Features } from "@/components/sections/Features";
import { Outcomes } from "@/components/sections/Outcomes";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { InstituteCase } from "@/components/sections/InstituteCase";
import { Trust } from "@/components/sections/Trust";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        {/* The studio */}
        <Hero />
        <TrustBar />
        <Services />
        <WhenToHelp />
        <HowItWorks />
        <Portfolio />

        {/* Featured case: the optics product, zoomed in */}
        <div className="relative">
          {/* tinted backdrop so the whole case reads as one block */}
          <div className="pointer-events-none absolute inset-0 bg-brand-blue/5" />
          <div className="relative">
            <CaseIntro />
            <Problem />
            <Shift />
            <Features />
            <Outcomes />
            <WhoItsFor />
          </div>
        </div>

        {/* Second case: language institutes */}
        <InstituteCase />

        {/* Back to the studio voice */}
        <Trust />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
