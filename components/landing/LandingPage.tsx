"use client";

import { CtaBand } from "./CtaBand";
import { Hero } from "./Hero";
import { ParallaxField } from "./ParallaxField";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { ValueIntro } from "./ValueIntro";
import { VideoIntro } from "./VideoIntro";

export function LandingPage() {
  return (
    <>
      <ParallaxField />
      <SiteHeader />
      <main className="min-w-0">
        <Hero />
        <ValueIntro />
        <VideoIntro />
        <Services />
        <Portfolio />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
