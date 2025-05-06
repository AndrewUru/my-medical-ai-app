# 💺 My Medical AI App

Aplicación web desarrollada con **Next.js**, **Supabase** y **shadcn/ui** para análisis y gestión de informes médicos.
Permite a los usuarios autenticarse, subir informes y visualizar resultados generados con IA.

---

## 🚀 Tecnologías utilizadas

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Supabase** (Base de datos + Autenticación)
- **Lucide React** (iconos)
- **Vercel** (despliegue)
- **Framer Motion** (opcional para animaciones)

---

## 📦 Estructura de carpetas

```bash
my-medical-ai-app/
├── app/                  # Páginas y rutas (Next.js App Router)
│   ├── dashboard/        # Rutas privadas (subir informes, resultados)
│   └── login/            # Página de login
├── components/           # Componentes reutilizables (Navbar, Sidebar, TotalConsultas, etc.)
├── lib/                  # Helpers y configuración (SupabaseClient, utils)
├── styles/               # Archivos CSS/Tailwind adicionales
├── public/               # Recursos públicos (favicon, etc.)
├── .env                  # Variables de entorno
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🔑 Variables de entorno (.env)

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 🛠 Instalación y desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/AndrewUru/my-medical-ai-app.git

# Acceder al directorio
cd my-medical-ai-app

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

---

## ✅ Componentes shadcn/ui instalados

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add card
npx shadcn-ui@latest add collapsible
```

(Agregar otros según necesidad: `skeleton`, `alert`, etc.)

---

## 🔐 Autenticación

Se utiliza **Supabase Auth**.
La sesión se mantiene y se verifica en cada ruta privada (`dashboard`, `results`, etc.).
Si no hay sesión, redirige a `/login`.

---

## 📊 Funcionalidades principales

- Registro e inicio de sesión
- Subida de informes médicos
- Visualización de resultados
- Estadísticas personalizadas
- Diseño responsivo con sidebar y navbar
- Gráficos y elementos UI modernos

---

## 👥 Despliegue

Aplicación optimizada para **Vercel**.
Solo hay que conectar el repositorio y añadir las variables de entorno.

---

## 🧠 Roadmap (próximas mejoras)

- Gráficos avanzados en dashboard
- Ajustes de perfil de usuario
- Notificaciones por email
- IA mejorada para análisis de informes

---

## 👨‍💻 Autor

Proyecto desarrollado por **AndrewUru**.

---

## 💡 Notas

> Esta aplicación está en desarrollo. Algunas funcionalidades pueden cambiar o ampliarse.
