"use client";

import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function UploadPage() {
  const [reportText, setReportText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const handleSubmit = async () => {
    if (!session) {
      alert("Debes iniciar sesión para subir informes");
      return;
    }

    if (!reportText) {
      alert("Por favor ingresa un texto o sube un PDF primero.");
      return;
    }

    setLoading(true);
    setResult("");
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reportText, userId: session.user.id }),
    });
    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Por ahora solo mostramos el nombre. Luego leeremos el texto.
      alert(`Has subido el archivo: ${file.name}`);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Análisis de informe médico
      </h1>

      <Card className="p-6 space-y-4 shadow-xl border border-gray-300">
        <Textarea
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
          placeholder="Pega aquí el texto de tu informe o sube un PDF..."
          className="min-h-[180px]"
        />

        <Input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="cursor-pointer"
        />

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full"
          variant="default"
        >
          {loading ? "Analizando..." : "Enviar para análisis"}
        </Button>
      </Card>

      {result && (
        <Card className="p-6 bg-muted border border-gray-300 shadow-sm">
          <h2 className="font-semibold mb-2 text-xl">Resultado:</h2>
          <p className="whitespace-pre-wrap">{result}</p>
        </Card>
      )}
    </div>
  );
}
