import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(
    vercelHost ? `https://${vercelHost}` : "http://localhost:3000",
  ),
  applicationName: "Tesdrive for Tesla",
  title: {
    default: "Tesdrive for Tesla | 테슬라용 Android 대시보드",
    template: "%s | Tesdrive for Tesla",
  },
  description:
    "테슬라와 BLE로 연결해 속도와 배터리 정보, 카카오내비 기반 길 안내와 과속카메라 알림을 한 화면에서 확인하는 Android 앱입니다.",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "g4qeNjdKhHPUQLAPi_inqTrxzls7kLf-tgkt3R3g5lE",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Tesdrive for Tesla",
    title: "Tesdrive for Tesla | 테슬라용 Android 대시보드",
    description:
      "BLE로 차와 연결해 속도와 배터리 정보, 길 안내와 과속카메라 알림을 한 화면에서 확인하세요.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesdrive for Tesla",
    description: "테슬라에 없는 계기판, 폰이 대신합니다.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className="scroll-smooth scroll-pt-24 max-[900px]:scroll-pt-[84px] max-sm:scroll-pt-[76px] motion-reduce:scroll-auto"
    >
      <body
        className={`${pretendard.variable} m-0 overflow-x-hidden bg-[#f3f4f7] font-[family-name:var(--font-pretendard)] text-[#0b0f17] text-base leading-[1.6] antialiased [overflow-wrap:break-word] [word-break:keep-all] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-3 [&_a:focus-visible]:outline-[#2563eb] [&_summary:focus-visible]:outline-2 [&_summary:focus-visible]:outline-offset-3 [&_summary:focus-visible]:outline-[#2563eb]`}
      >
        {children}
      </body>
    </html>
  );
}
