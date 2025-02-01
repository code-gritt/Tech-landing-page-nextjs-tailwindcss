import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import SectionBadge from "./ui/section-badge";

const HIGHLIGHTS = [
  {
    icon: "/icons/shield.svg",
    label: "Secure Platform",
  },
  {
    icon: "/icons/clock.svg",
    label: "Real-time Updates",
  },
  {
    icon: "/icons/magicpen.svg",
    label: "Smart Features",
  },
];

const CTA = () => {
  return (
    <Wrapper className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-screen object-cover"
          muted
          autoPlay
          loop
          controls
        >
          <source src="/time.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col items-center text-center relative gap-4 z-10">
        <div className="flex flex-col items-start justify-start w-full z-30">
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <SectionBadge title="Start now" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white">
              Ready to get started?
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <p className="text-sm md:text-base lg:text-lg text-white max-w-lg mx-auto mt-4">
              Sign up for a free trial and see how PropEase can help you manage
              your properties.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <div className="flex items-center mt-4">
              <div className="rounded-full px-4 py-2.5 bg-neutral-900 flex flex-wrap md:flex-row items-center justify-center gap-4">
                {HIGHLIGHTS.map((item, index) => (
                  <AnimationContainer
                    key={index}
                    animation="fadeRight"
                    delay={0.7 + index * 0.1}
                  >
                    <div className="flex items-center gap-2 last:hidden md:last:flex">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={1024}
                        height={1024}
                        className="size-5 text-primary"
                      />
                      <span className="text-sm text-foreground">
                        {item.label}
                      </span>
                    </div>
                  </AnimationContainer>
                ))}
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <Link href="/signin">
              <Button size="lg" className="mt-6 bigTextButton">
                Start now
                <ArrowRightIcon className="size-4 ml-2" />
              </Button>
            </Link>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default CTA;
