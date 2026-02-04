import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PakMed GBO - Green Blood Detox | 1 เม็ด = ผัก 2 กิโล",
  description: "นวัตกรรมดีท็อกซ์เลือดและลำไส้ด้วยสารสกัดผักเข้มข้น 9 ชนิด (Wheatgrass & Alfalfa) ช่วยขับสารพิษ บำรุงสายตา และเพิ่มพลังงาน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${sarabun.variable} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
