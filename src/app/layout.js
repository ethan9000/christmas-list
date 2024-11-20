import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ethan's Wish List",
  description: "A list of gift ideas for Ethan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/fnk8dlt.css"
        ></link>
        <meta
          property="og:image"
          content="https://ethanchristmas.com/opengraph-image.png"
        />
      </head>
      <ConvexClientProvider>
        <body className="bg-[#efe9e1]">{children}</body>
      </ConvexClientProvider>
    </html>
  );
}
