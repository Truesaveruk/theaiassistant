import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The AI Assistant — honest AI tool reviews for UK business owners",
    template: "%s · The AI Assistant",
  },
  description:
    "Which AI tools are worth your time, which aren't, and what to do first. Written for business owners who aren't technical.",
  openGraph: {
    title: "The AI Assistant",
    description:
      "Honest AI tool reviews and practical guidance for UK business owners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
