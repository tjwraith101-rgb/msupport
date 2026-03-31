import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Microsoft Account Center",
    template: "%s | Microsoft Account Center",
  },
  description:
    "Sign in to your Microsoft account to access Outlook, Office, OneDrive, and more.",
  keywords: [
    "microsoft account",
    "outlook",
    "office 365",
    "onedrive",
    "teams",
    "microsoft login",
  ],
  openGraph: {
    type: "website",
    url: "https://outlook.office365.com/",
    siteName: "Microsoft Account",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
          {children}
        </div>
      </body>
    </html>
  );
}
