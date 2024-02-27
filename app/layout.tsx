import type { Metadata } from "next";
import { nunito, poppins } from "./ui/fonts";
import "./globals.css";
import Header from "./components/Header";
import ToTop from "./components/ToTop";

export const metadata: Metadata = {
  title: "Weebixx",
  description: "Discover your favourite animanga titles, all conveniently available for your enjoyment on Weebixx.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${nunito.className} antialiased text-[#1a1a1a] dark:bg-background-dark dark:text-white`}>
        <Header />
        {children}
        <ToTop />
      </body>
    </html>
  );
}
