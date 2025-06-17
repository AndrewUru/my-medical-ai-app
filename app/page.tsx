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
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Users,
  BarChart3,
  Sparkles,
  Stethoscope,
  Clock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Potenciado por IA de vanguardia
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Análisis Médico
              <br />
              <span className="text-gray-900">Inteligente</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tu asistente inteligente para interpretar informes médicos.
              Analiza, resume y proporciona recomendaciones claras y
              profesionales en
              <span className="font-semibold text-blue-600"> minutos</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/login" className="flex items-center gap-2">
                Comenzar ahora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50"
            >
              <Link href="#demo">Ver demo</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99%</div>
              <div className="text-gray-600">Precisión en análisis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2min</div>
              <div className="text-gray-600">Tiempo promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">10k+</div>
              <div className="text-gray-600">Informes procesados</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para análisis médico inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades diseñadas para profesionales de la salud y
              pacientes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current Features */}
            <Card className="p-8 border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Funcionalidades Actuales
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    text: "Registro e inicio de sesión seguro",
                    color: "text-green-600",
                  },
                  {
                    icon: FileText,
                    text: "Subida de informes médicos en texto",
                    color: "text-blue-600",
                  },
                  {
                    icon: BrainCog,
                    text: "Análisis detallado mediante IA (GPT-4o)",
                    color: "text-purple-600",
                  },
                  {
                    icon: FolderOpen,
                    text: "Historial de informes guardados",
                    color: "text-orange-600",
                  },
                  {
                    icon: Paintbrush,
                    text: "Interfaz moderna (Shadcn/ui + Tailwind CSS)",
                    color: "text-pink-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <CheckCircle className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Features */}
            <Card className="p-8 border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Próximas Actualizaciones
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: FilePlus2,
                    text: "Subida de informes en PDF con extracción automática",
                    color: "text-blue-600",
                  },
                  {
                    icon: Trash2,
                    text: "Eliminación y gestión de informes",
                    color: "text-red-600",
                  },
                  {
                    icon: Mail,
                    text: "Notificaciones por email",
                    color: "text-green-600",
                  },
                  {
                    icon: Smartphone,
                    text: "Versión móvil optimizada",
                    color: "text-purple-600",
                  },
                  {
                    icon: UserPlus,
                    text: "Integración con especialistas",
                    color: "text-orange-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WARNING SECTION */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-3">
                  Importante: Uso Responsable
                </h3>
                <p className="text-yellow-700 leading-relaxed">
                  Esta aplicación utiliza inteligencia artificial para brindar
                  asistencia en la interpretación de informes médicos.{" "}
                  <strong>
                    No sustituye el diagnóstico ni las recomendaciones de
                    profesionales de la salud.
                  </strong>{" "}
                  Siempre consulte a su médico o especialista ante cualquier
                  duda o decisión clínica.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CONSULTAS CHART */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estadísticas en Tiempo Real
            </h2>
            <p className="text-gray-600">
              Monitoreo de consultas y análisis realizados
            </p>
          </div>
          <ConsultasChart />
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Monitor className="w-8 h-8 text-blue-600" />
              Vista Previa del Sistema
            </h2>
            <p className="text-xl text-gray-600">
              Experimenta cómo funciona nuestro análisis inteligente
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-2 border-gray-100">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Formulario de Análisis
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Informe Médico
                  </label>
                  <Textarea
                    placeholder="Pega aquí tu informe médico o sube un archivo PDF para análisis..."
                    className="min-h-[120px] resize-none"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subir Archivo (PDF, DOC, TXT)
                  </label>
                  <Input
                    type="file"
                    disabled
                    className="cursor-not-allowed border-2 border-dashed border-gray-300 p-4"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </div>

                <Button
                  disabled
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 text-lg font-semibold"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Enviar para Análisis (Demo)
                </Button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700 text-center">
                  💡 <strong>Demo:</strong> En la versión completa, aquí verías
                  el análisis detallado con recomendaciones
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* WHY AI SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué usar IA para informes médicos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Los informes médicos pueden ser extensos y complejos. Nuestra IA
              resume, explica y ofrece recomendaciones claras para que pacientes
              y médicos comprendan mejor cada diagnóstico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Ahorra Tiempo",
                description:
                  "Análisis en minutos en lugar de horas de revisión manual",
                color: "text-blue-600",
              },
              {
                icon: BarChart3,
                title: "Mayor Precisión",
                description:
                  "Tecnología de vanguardia que reduce errores humanos",
                color: "text-green-600",
              },
              {
                icon: Users,
                title: "Mejor Comprensión",
                description:
                  "Explicaciones claras para pacientes y profesionales",
                color: "text-purple-600",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div
                  className={`p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de profesionales que ya confían en nuestro análisis
            inteligente
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Link href="/login" className="flex items-center gap-2">
                Crear cuenta gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-green-500 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </div>

          <p className="text-blue-100 text-sm mt-6">
            ✨ Empieza gratis • Sin tarjeta de crédito • IA médica a tu alcance
          </p>
        </div>
      </section>
    </div>
  );
}
