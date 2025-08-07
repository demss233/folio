import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ss.",
  description: "Shiv Satyam | 18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="face.ico" type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} px-10 mx-auto flex flex-col gap-8 py-5`}
      >
        {children}
      </body>
    </html>
  );
}
