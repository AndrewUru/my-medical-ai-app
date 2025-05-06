"use client";

import { useEffect, useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import TotalConsultas from "@/components/TotalConsultas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SelectorEspecialista from "@/components/SelectorEspecialista";
import FormularioAgendarConsulta from "@/components/FormularioAgendarConsulta";

export default function DashboardPage() {
  const supabase = createPagesBrowserClient();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [especialistaSeleccionado, setEspecialistaSeleccionado] = useState<string | null>(null);

  useEffect(() => {
    const initSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error obteniendo la sesión:", error.message);
          setError("No se pudo verificar la sesión.");
          return;
        }

        if (!data.session) {
          router.push("/login");
          return;
        }

        setSession(data.session);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error inesperado:", err.message);
          setError("Error inesperado verificando la sesión.");
        } else {
          console.error("Error inesperado:", err);
          setError("Error inesperado verificando la sesión.");
        }
      } finally {
        setLoading(false);
      }
    };

    initSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.push("/login");
        } else {
          setSession(session);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p className="p-6">Cargando sesión...</p>;
  if (error) return <p className="text-red-500 p-6">{error}</p>;

  return (
    <div className="min-h-screen p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Bienvenido al Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Sesión activa con el correo:{" "}
            <Badge variant="secondary" className="text-gray-900">
              {session?.user.email}
            </Badge>
          </p>
          <p className="mt-4 text-gray-300">
            Aquí puedes ver tus informes médicos y estadísticas.
          </p>
        </CardContent>
      </Card>

      <SelectorEspecialista onSeleccionar={setEspecialistaSeleccionado} />
      <FormularioAgendarConsulta especialista={especialistaSeleccionado} />

      {/* Total de consultas */}
      <Card>
        <CardHeader>
          <CardTitle>Total de Consultas</CardTitle>
        </CardHeader>
        <CardContent>
          <TotalConsultas />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estadísticas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Pronto estarán disponibles más estadísticas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
