import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import Marquee from "./ui/marquee";
import SectionBadge from "./ui/section-badge";

const Hero = () => {
  const companies = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp5,
    Images.comp6,
  ];

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full h-full flex-1">
      <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16">
        <div className="flex flex-col items-start gap-10 py-8 w-full">
          <div className="flex flex-col max-w-xl items-start gap-4">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <SectionBadge title="Trusted by 10,000+ Users" />
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <h1 className="text-5xl lg:text-6xl font-medium !leading-tight text-black">
                Build Your Intelligent AI Workforce with Navan AI
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                With Navan AI, let your eCommerce business scale with the power
                of Generative AI and Automation
              </p>
            </AnimationContainer>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <div className="w-full">
              <Link href="/">
                <Button className="w-full md:w-auto">Schedule A Demo</Button>
              </Link>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <div className="flex flex-col items-start gap-4 py-4">
              <p className="text-sm md:text-base text-muted-foreground">
                Trusted by Industry Leaders
              </p>
              <div className="w-full relative max-w-[calc(100vw-2rem)] lg:max-w-lg">
                <Marquee className="[--duration:40s] select-none [--gap:2rem]">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center text-muted-foreground h-16"
                    >
                      {companies[index % companies.length]({
                        className: "w-auto h-5",
                      })}
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 -right-1 w-1/3 bg-gradient-to-l from-[#101010] z-40"></div>
                <div className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 bg-gradient-to-r from-[#101010] z-40"></div>
              </div>
            </div>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeRight" delay={0.4}>
          <div className="flex flex-col items-start justify-start w-full h-min relative overflow-visible">
            <Image
              src="/images/ai_agents_hero_bg.webp"
              alt="hero"
              sizes="1000px"
              width={641}
              height={578}
              className="object-contain min-w-full h-auto rounded-xl lg:rounded-2xl"
            />
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default Hero;
