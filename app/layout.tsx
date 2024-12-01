import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuificOS | Under Construction",
  description: "This website is currently under construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
