// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/HEADER";
import Footer from "@/components/FOOTER";

export const metadata: Metadata = {
  title: "Nike Store UI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
