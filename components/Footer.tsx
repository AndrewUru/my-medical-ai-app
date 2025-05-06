"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t pt-8 pb-6 bg-white text-center text-gray-600 text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} HealthAnalytics. Todos los derechos
          reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/politica-privacidad"
            className="hover:text-primary transition-colors"
          >
            Política de Privacidad
          </a>
          <a
            href="/terminos-condiciones"
            className="hover:text-primary transition-colors"
          >
            Términos y Condiciones
          </a>
          <a href="/contacto" className="hover:text-primary transition-colors">
            Contacto
          </a>
        </div>
        <p className="text-gray-400">
          Desarrollado por{" "}
          <a
            href="https://www.elsaltoweb.es"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            El Salto Web
          </a>
        </p>
      </div>
    </footer>
  );
}
