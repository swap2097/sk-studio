import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
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

  creator: "SK Studio",

  openGraph: {
    title: "SK Studio | Premium Websites for Creators",
    description:
      "Premium digital experiences for creators and personal brands.",
    url: "https://skstudio20.in",
    siteName: "SK Studio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SK Studio | Premium Websites for Creators",
    description:
      "Premium digital experiences for creators and personal brands.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} ${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-[#11001F] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}