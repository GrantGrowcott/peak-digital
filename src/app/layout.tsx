import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script"; 

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Peak Digital | Hamilton Web Design & SEO",
  description:
    "Peak Digital builds high-converting websites for businesses in Hamilton. Web design, SEO, branding, and app development — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HVBMNXYXJZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HVBMNXYXJZ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
