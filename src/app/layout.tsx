import { Toaster } from "@/components/ui/sonner";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>navan.ai</title>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#ffffff] text-foreground font-base antialiased overflow-x-hidden dark",
          base.variable,
          heading.variable
        )}
      >
        <Toaster richColors theme="dark" position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
