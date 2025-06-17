💺 My Medical AI App

Aplicación web full stack desarrollada con Next.js, Supabase y OpenAI API para la gestión y análisis inteligente de informes médicos.

Permite a los usuarios autenticarse, cargar documentos clínicos y obtener resultados generados mediante Inteligencia Artificial. Su diseño moderno y modular está optimizado para despliegue en Vercel y uso profesional en entornos médicos digitales.


---

🚀 Tecnologías utilizadas

Next.js 14 – App Router + Server Actions

TypeScript

Tailwind CSS

shadcn/ui – Componentes modernos accesibles

Supabase – Base de datos Postgres + Auth

OpenAI API – Análisis automático de textos médicos

Lucide React – Iconografía

Framer Motion – Animaciones suaves (opcional)

Vercel – Deploy y hosting instantáneo



---

📁 Estructura del proyecto

my-medical-ai-app/
├── app/                  # Rutas y páginas (App Router)
│   ├── dashboard/        # Área privada del usuario (subida y análisis)
│   └── login/            # Inicio de sesión
├── components/           # Componentes UI reutilizables
├── lib/                  # Configuraciones y utilidades (Supabase, OpenAI)
├── styles/               # Estilos globales y personalizados
├── public/               # Recursos estáticos (favicon, imágenes)
├── .env                  # Variables de entorno
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md


---

🔑 Variables de entorno

NEXT_PUBLIC_SUPABASE_URL=tu-url-de-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
OPENAI_API_KEY=tu-clave-de-openai


---

⚙️ Instalación local

# Clonar el repositorio
git clone https://github.com/AndrewUru/my-medical-ai-app.git

# Entrar al proyecto
cd my-medical-ai-app

# Instalar dependencias
npm install

# Iniciar entorno de desarrollo
npm run dev

Accede a http://localhost:3000


---

🧩 Componentes shadcn/ui incluidos

npx shadcn-ui@latest add button
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add card
npx shadcn-ui@latest add collapsible

(Se pueden agregar más como alert, skeleton, dialog, etc.)


---

🔐 Autenticación y seguridad

Implementada con Supabase Auth

Las rutas protegidas verifican sesión activa

Redirección automática a /login en caso de sesión inválida



---

📊 Funcionalidades principales

✅ Registro e inicio de sesión seguro

📄 Subida y almacenamiento de informes médicos

🤖 Análisis automático mediante OpenAI

📈 Visualización de resultados y estadísticas

💡 Interfaz moderna con diseño responsivo

🧭 Navegación con sidebar dinámica y navbar fija



---

☁️ Despliegue

Desarrollado para funcionar sin fricción en Vercel.
Solo necesitas:

1. Conectar tu cuenta de GitHub con Vercel


2. Añadir las variables .env en el panel de configuración


3. Hacer deploy (¡listo en segundos!)




---

🧠 Roadmap (próximas mejoras)

[ ] Visualización avanzada de gráficas con filtros por fechas

[ ] Configuración de perfil y preferencias

[ ] Envío de notificaciones por email

[ ] Optimización del análisis IA para mayor precisión clínica



---

👤 Autor

Desarrollado por AndrewUru
💬 Contacto abierto para mejoras o colaboración


---

⚠️ Notas finales

> Esta aplicación está en fase activa de desarrollo. Algunas funcionalidades podrían cambiar o expandirse próximamente. Se recomienda no usarla en entornos clínicos reales sin validación profesional.