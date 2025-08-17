import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

// Load fonts
const opensans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lunarix",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`text-base sm:text-2xl textGradient ${fugaz.className}`}>Lunarix</h1>
      <div className="flex items-center justify-between">PLACEHOLDER CTA || STATS </div>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 text-center text-gray-500 text-xs mt-auto">
      © {new Date().getFullYear()} Lunarix. All rights reserved.
    </footer>
  );

  return (
    <html lang="en" className={`${opensans.variable} ${fugaz.variable}`}>
      <body className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${opensans.className}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
