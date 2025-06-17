import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SupabaseProvider } from "@/lib/supabaseProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Análisis Médico AI",
  description: "Tu asistente de informes médicos con IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="w-screen">
      <body
        className={`${inter.className} antialiased bg-background text-foreground min-h-screen overflow-x-hidden w-full flex flex-col`}
      >
        <SupabaseProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mx-auto">{children}</main>
            <Footer />
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
