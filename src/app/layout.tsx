import type { Metadata } from "next";
import { Sora, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Display / headlines — geometric and characterful, not the overused defaults.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

// Body — a warm humanist grotesque, more human than the usual Inter.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

// Small labels, data and eyebrows — gives the page a real "product" texture.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

const SITE_URL = "https://latamsoft.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "LatamSoft — Estudio de software a la medida y productos propios",
  description:
    "Construimos el sistema que tu negocio necesita: software a la medida y productos propios para sectores como las ópticas. Deja los cuadernos y el Excel suelto, y ten todo ordenado en un solo lugar.",
  keywords: [
    "software a la medida",
    "estudio de software Latinoamérica",
    "sistemas de gestión para negocios",
    "software para ópticas",
    "automatización de procesos",
    "LatamSoft",
  ],
  authors: [{ name: "LatamSoft" }],
  icons: {
    icon: [
      { url: "/latamsoft-favicon.svg", type: "image/svg+xml" },
      { url: "/latamsoft-favicon.png", type: "image/png" },
    ],
    shortcut: "/latamsoft-favicon.png",
    apple: "/latamsoft-favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: SITE_URL,
    siteName: "LatamSoft",
    title: "LatamSoft — Software a la medida y productos propios",
    description:
      "Construimos el sistema que tu negocio necesita. Software a la medida y productos propios para sectores como las ópticas, desde Latinoamérica.",
    images: [
      {
        url: "/brand/latamsoft-social-card-dark.png",
        width: 1200,
        height: 630,
        alt: "LatamSoft — Software que simplifica procesos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LatamSoft — Software a la medida y productos propios",
    description:
      "Construimos el sistema que tu negocio necesita, desde Latinoamérica.",
    images: ["/brand/latamsoft-social-card-dark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${hanken.variable} ${spaceMono.variable} dark`}
      data-theme="dark"
    >
      <head>
        {/* Runs before paint: stop the browser from restoring the previous
            scroll position so a reload always opens at the top (anchors still work). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}if(!location.hash){window.scrollTo(0,0);}",
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-text flex flex-col selection:bg-brand-lime selection:text-brand-night">
        <ScrollToTop />
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
