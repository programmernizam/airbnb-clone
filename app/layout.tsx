import Modal from "@/components/Modal/Modal";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};
const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
