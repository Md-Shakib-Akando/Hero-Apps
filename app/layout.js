import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/NavBar/page";
import Footer from "./components/Footer/page";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hero Apps",
  description: "A collection of free productivity apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
