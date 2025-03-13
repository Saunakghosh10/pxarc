import { Toaster } from "@/components/toast";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PreloaderWrapper } from "./preloader-wrapper";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXTAUTH_URL || "https://pixelarc.vercel.app/"),
 keywords:
   "web development, mobile development, SEO, design, consulting, marketing, PixelArc, client solutions, business growth",
 title: "PixelArc | Client-Focused Product Development",
 description:
   "Creating tailored products for clients. Specializing in web development, mobile apps, design, SEO, marketing, and consulting.",
 openGraph: {
   type: "website",
   locale: "en_IE",
   url: `${process.env.NEXTAUTH_URL}/opengraph-image.png`,
   images: "/opengraph-image.png",
   siteName: "PixelArc",
 },
 icons: [
   {
     url: "/icons/px.png",
     rel: "icon",
     type: "image/png",
   },
 ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black`}>
        <Toaster />
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
