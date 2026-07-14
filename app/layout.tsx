import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site-chrome";

export const metadata: Metadata = { metadataBase: new URL("https://www.example.com"), title: { default: "BarVista Display | Custom Stretched Bar LCD Displays", template: "%s | BarVista Display" }, description: "Custom stretched bar LCD displays and ultra-wide display solutions for retail, digital signage, transport and industrial applications.", openGraph: { type: "website", locale: "en_US", siteName: "BarVista Display", title: "Custom Stretched Bar LCD Displays", description: "Engineered display solutions for global B2B projects." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header />{children}<Footer /></body></html>; }
