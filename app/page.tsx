import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ConsultasChart from "@/components/ConsultasChart";


// Importar iconos Lucide
import {
  Lock,
  FileText,
  BrainCog,
  FolderOpen,
  Paintbrush,
  FilePlus2,
  Trash2,
  Mail,
  Smartphone,
  UserPlus,
  Monitor,
} from "lucide-react";

export default function Home() {
  return (
    <section className="space-y-12 py-16">
      {/* HERO */}
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold text-primary">
          Análisis Médico con IA
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tu asistente inteligente para interpretar informes médicos. Analiza,
          resume y proporciona recomendaciones claras y profesionales en
          minutos.
        </p>
        <Button asChild size="lg">
          <Link href="/login">Comenzar ahora</Link>
        </Button>
      </div>



      {/* FUNCIONALIDADES */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="p-6 space-y-3 shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Funcionalidades actuales
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Lock className="w-5 h-5" /> Registro e inicio de sesión seguro.
            </li>
            <li className="flex items-center gap-2">
              <FileText className="w-5 h-5" /> Subida de informes médicos en
              texto.
            </li>
            <li className="flex items-center gap-2">
              <BrainCog className="w-5 h-5" /> Análisis detallado mediante IA
              (GPT-4o).
            </li>
            <li className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5" /> Historial de informes
              guardados.
            </li>
            <li className="flex items-center gap-2">
              <Paintbrush className="w-5 h-5" /> Interfaz moderna (Shadcn/ui +
              Tailwind CSS).
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-3 shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Próximas actualizaciones
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <FilePlus2 className="w-5 h-5" /> Subida de informes en PDF con
              extracción automática.
            </li>
            <li className="flex items-center gap-2">
              <Trash2 className="w-5 h-5" /> Eliminación y gestión de informes.
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> Notificaciones por email.
            </li>
            <li className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" /> Versión móvil optimizada.
            </li>
            <li className="flex items-center gap-2">
              <UserPlus className="w-5 h-5" /> Integración con especialistas.
            </li>
          </ul>
        </Card>
      </div>

      {/* ADVERTENCIA */}
      <Card className="p-4 max-w-3xl mx-auto border-l-4 border-yellow-500 bg-yellow-50 text-yellow-800">
        <p>
          <strong>Importante:</strong> Esta aplicación utiliza inteligencia
          artificial para brindar asistencia en la interpretación de informes
          médicos.{" "}
          <strong>
            No sustituye el diagnóstico ni las recomendaciones de profesionales
            de la salud.
          </strong>{" "}
          Siempre consulte a su médico o especialista ante cualquier duda o
          decisión clínica.
        </p>
      </Card>

      {/* COMPONENTE CONSULTAS*/}

      <ConsultasChart />
      {/* VISTA PREVIA */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-primary flex justify-center gap-2">
          <Monitor className="w-6 h-6" /> Vista previa del formulario
        </h2>
        <Card className="p-6 space-y-4 shadow-lg">
          <Textarea
            placeholder="Aquí iría el informe médico pegado o extraído del PDF..."
            disabled
          />
          <Input type="file" disabled className="cursor-not-allowed" />
          <Button disabled className="w-full">
            Enviar para análisis (demo)
          </Button>
        </Card>
      </div>

      {/* POR QUÉ USAR IA */}
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="text-3xl font-semibold">
          ¿Por qué usar IA para informes médicos?
        </h2>
        <p className="text-muted-foreground">
          Los informes médicos pueden ser extensos y complejos. Nuestra IA
          resume, explica y ofrece recomendaciones claras para que pacientes y
          médicos comprendan mejor cada diagnóstico. Ahorra tiempo y mejora la
          precisión con tecnología de vanguardia.
        </p>
      </div>

      {/* CTA FINAL */}
      <div className="text-center space-y-2 pt-10">
        <Button asChild size="lg">
          <Link href="/login">Crear cuenta gratuita</Link>
        </Button>
        <p className="text-muted-foreground text-sm">
          Empieza gratis. IA médica a tu alcance.
        </p>
      </div>
    </section>
  );
}
