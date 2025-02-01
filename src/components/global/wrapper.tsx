import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ className, children }: Props) => {
  return (
    <section
      className={cn(
        "h-full mx-auto w-full px-4 lg:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Wrapper;
