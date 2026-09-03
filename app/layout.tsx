import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajeshwari S | Biomedical Engineer",
  description:
    "Portfolio of Rajeshwari S, a Biomedical Engineer and Clinical Application Engineer experienced in laparoscopy systems, medical equipment support, and clinical training.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
