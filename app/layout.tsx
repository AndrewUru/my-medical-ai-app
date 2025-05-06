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
    <html lang="es">
      <body
        className={`${inter.className} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SupabaseProvider>
          <Navbar />
          <main className="flex-1 container max-w-4xl mx-auto p-6">
            {children}
          </main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
