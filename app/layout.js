import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://skstudio20.in"),

  title: {
    default: "SK Studio | Premium Websites for Creators",
    template: "%s | SK Studio",
  },

  description:
    "SK Studio creates premium, high-performance websites for creators and personal brands.",

  keywords: [
    "creator websites",
    "premium creator websites",
    "creator web design",
    "personal brand website",
    "SK Studio",
  ],

  authors: [
    {
      name: "SK Studio",
    },
  ],

  openGraph: {
    title: "SK Studio | Premium Websites for Creators",
    description:
      "Premium digital experiences for creators and personal brands.",
    url: "https://skstudio20.in",
    siteName: "SK Studio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}