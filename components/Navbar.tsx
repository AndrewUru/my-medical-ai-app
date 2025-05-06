"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  Upload,
  Activity,
  LogOut,
  LogIn,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Session } from "@supabase/supabase-js";

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createPagesBrowserClient();
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Subir Informe", href: "/dashboard/upload", icon: Upload },
    { name: "Resultados", href: "/dashboard/results", icon: Activity },
  ];

  // Detectar sesión (para saber si está logueado en cualquier página)
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav
      role="navigation"
      className={cn(
        "w-full sticky top-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300 border-b bg-white/95 backdrop-blur-sm text-gray-900 border-gray-200"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🩺</span>
          <span className="hidden sm:inline">HealthAnalytics</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-1 rounded-lg transition-all",
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}

          {/* Botones de autenticación */}
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden lg:inline">
                {session.user.email}
              </span>
              <Button
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <Link href="/login" legacyBehavior passHref>
              <Button
                variant="outline"
                className="text-green-600 hover:bg-green-50 border-green-600 hover:text-green-700"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar sesión
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-lg mx-4">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Botones de autenticación móvil */}
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 hidden lg:inline">
                  {session.user.email}
                </span>
                <Button
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <Link href="/login" legacyBehavior passHref>
                <Button
                  variant="outline"
                  className="text-green-600 hover:bg-green-50 border-green-600 hover:text-green-700"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
