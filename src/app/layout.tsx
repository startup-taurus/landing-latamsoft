import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "LatamSoft | Software que simplifica procesos",
  description: "Desarrollo a medida, productos digitales y soluciones flexibles para crecer. Automatiza tareas y reduce costos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} dark`} data-theme="dark">
      <body className="antialiased min-h-screen bg-background text-text flex flex-col selection:bg-brand-turquoise selection:text-brand-night">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
