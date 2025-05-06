"use client";

import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

type Report = {
  id: string;
  report_text: string;
  result_text: string;
  created_at: string;
};

export default function ResultsPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      if (!session) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("medical_reports")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setReports(data || []);
      }

      setLoading(false);
    };

    fetchReports();
  }, [session, supabase]);

  if (!session) {
    return (
      <div className="p-6 text-center text-white">
        <p>Debes iniciar sesión para ver tus informes.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 text-center text-white">
        <p>Cargando informes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>Error al cargar informes: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Mis informes médicos
      </h1>

      {reports.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No tienes informes guardados.</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Cuando subas un informe, aparecerá aquí.
            </p>
          </CardContent>
        </Card>
      ) : (
        reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Informe
                <Badge variant="secondary">
                  {new Date(report.created_at).toLocaleDateString()}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-800">
              <p>
                <strong>Descripción:</strong> {report.report_text}
              </p>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm">
                    Ver resultado
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 text-gray-700 whitespace-pre-wrap">
                    {report.result_text}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
