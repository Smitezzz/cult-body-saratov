import type { Metadata } from "next";
import "./globals.css";

const publicOrigin = "https://smitezzz.github.io/cult-body-saratov";

export const metadata: Metadata = {
  metadataBase: new URL(publicOrigin),
  title: "Cult Body — студия эстетики тела",
  description: "Cult Body в Саратове: коррекция фигуры, массаж, лазерная эпиляция, солярий, ногтевой сервис и косметология. 1-й Вакуровский проезд, 1.",
  icons: { icon: `${publicOrigin}/favicon.svg`, shortcut: `${publicOrigin}/favicon.svg` },
  openGraph: { title: "Cult Body", description: "Территория красивого тела · Саратов", images: [{ url: `${publicOrigin}/og.png`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Cult Body", description: "Территория красивого тела · Саратов", images: [`${publicOrigin}/og.png`] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
