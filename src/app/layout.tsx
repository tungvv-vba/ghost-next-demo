import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "./_shared/components/Header";
import { getSettings } from "./_shared/services";
import { SettingsResponse } from "@tryghost/content-api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VBA Blog",
  description: "Welcome to VBA Blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header settings={settings as SettingsResponse} />
        <div className="mt-16 py-7 h-screen">{children}</div>
      </body>
    </html>
  );
}
