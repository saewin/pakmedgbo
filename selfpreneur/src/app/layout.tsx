import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const prompt = Prompt({
  variable: "--font-prompt",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selfpreneur AI OS | ระบบปฏิบัติการธุรกิจอัตโนมัติ",
  description: "บริการ Managed Service วางระบบ AI Marketing ครบวงจร ข้อมูลลูกค้าเป็นของคุณ 100% เริ่มต้นสร้างธุรกิจที่มั่งคั่งอย่างยั่งยืน",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${prompt.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

