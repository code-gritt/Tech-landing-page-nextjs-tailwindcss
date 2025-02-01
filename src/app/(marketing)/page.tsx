"use client";

import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
import PlatformMetrics from "@/components/platform-metrics";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import useLenis from "@/hooks/useLenis";
import image1 from "../../../public/images/nStudio.png";
import image2 from "../../../public/images/nStudio1.png";
import image3 from "../../../public/images/nStudio2.png";
import { StaticImageData } from "next/image";
import { ColourfulText } from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import { WorldMapDemo } from "@/components/WorldMapDemo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";

type Product = {
  title: string;
  link: string;
  thumbnail: {
    image1?: StaticImageData;
    image2?: StaticImageData;
    image3?: StaticImageData;
  };
};

const products: Product[] = [
  {
    title: "Moonbeam",
    link: "https://navan.ai/nStudio/",
    thumbnail: { image1 },
  },
  {
    title: "Cursor",
    link: "https://navan.ai/products/ai-shopping-assistant-customer-service-agent/",
    thumbnail: { image2 },
  },
  {
    title: "Rogue",
    link: "https://navan.ai/products/ai-lead-generation-agent/",
    thumbnail: { image3 },
  },

  {
    title: "Editorially",
    link: "https://navan.ai/products/ai-shopping-assistant-customer-service-agent/",
    thumbnail: { image2 },
  },
  {
    title: "Editrix AI",
    link: "https://navan.ai/products/ai-lead-generation-agent/",
    thumbnail: { image3 },
  },
  {
    title: "Pixel Perfect",
    link: "https://navan.ai/products/ai-shopping-assistant-customer-service-agent/",
    thumbnail: { image2 },
  },

  {
    title: "Algochurn",
    link: "https://navan.ai/products/ai-lead-generation-agent/",
    thumbnail: { image3 },
  },
  {
    title: "Aceternity UI",
    link: "https://navan.ai/products/ai-shopping-assistant-customer-service-agent/",
    thumbnail: { image2 },
  },
  {
    title: "Tailwind Master Kit",
    link: "https://navan.ai/products/ai-lead-generation-agent/",
    thumbnail: { image3 },
  },
  {
    title: "SmartBridge",
    link: "https://navan.ai/products/ai-shopping-assistant-customer-service-agent/",
    thumbnail: { image2 },
  },
  {
    title: "Renderwork Studio",
    link: "https://navan.ai/products/ai-lead-generation-agent/",
    thumbnail: { image3 },
  },

  {
    title: "Creme Digital",
    link: "https://navan.ai/products/ai-shopping-assistant-customer-service-agent/",
    thumbnail: { image2 },
  },
  {
    title: "Golden Bells Academy",
    link: "https://navan.ai/nStudio/",
    thumbnail: { image1 },
  },
  {
    title: "Invoker Labs",
    link: "https://navan.ai/products/ai-lead-generation-agent/",
    thumbnail: { image3 },
  },
  {
    title: "E Free Invoice",
    link: "https://navan.ai/nStudio/",
    thumbnail: { image1 },
  },
];

const HomePage = () => {
  useLenis();
  return (
    <div className="w-full relative flex flex-col">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-[#5f5f61]">
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  An AI Workforce to build 10X Growth
                </span>{" "}
                <br />{" "}
              </h1>
            </>
          }
        >
          <video height={720} width={1400} muted autoPlay loop controls>
            <source src="/original.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ContainerScroll>
      </section>
      <section className="w-full">
        <HeroParallax
          products={products.map((product) => ({
            title: product.title,
            link: product.link,
            thumbnail: (product.thumbnail.image1 ||
              product.thumbnail.image2 ||
              product.thumbnail.image3 ||
              "") as string,
          }))}
        />
      </section>
      <section className="w-full">
        <Perks />
      </section>

      <section className="w-full">
        <AppleCardsCarouselDemo />
      </section>

      <section className="w-full">
        <HowItWorks />
      </section>

      <section className="w-full">
        <Features />
      </section>
      <section className="w-full">
        <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
          <motion.img
            src="/images/lego.jpg"
            className="h-full w-full object-cover absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
          <h1 className="max-w-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-2 font-sans">
            Creating products with the best {""}
            <ColourfulText text="DEVELOPERS" /> <br /> from all over the world
          </h1>
        </div>
      </section>

      <section className="w-full">
        <Testimonials />
      </section>

      <section className="w-full">
        <Pricing />
      </section>

      <section className="w-full">
        <PlatformMetrics />
      </section>

      <section className="w-full">
        <FAQ />
      </section>

      <section className="w-full">
        <CTA />
      </section>

      <section className="w-full">
        <WorldMapDemo />
      </section>
    </div>
  );
};

export default HomePage;
