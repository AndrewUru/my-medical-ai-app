"use client";

import { useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const supabase = createPagesBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert("Error registrando: " + error.message);
    else alert("Registro exitoso. Revisa tu correo.");
  };

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert("Error al iniciar sesión: " + error.message);
    else router.push("/dashboard");
  };

  return (
    <section className="flex justify-center items-center min-h-[80vh]">
      <Card className="p-8 space-y-6 max-w-md w-full shadow-lg">
        <h1 className="text-3xl font-bold text-center">Accede a tu cuenta</h1>

        <div className="space-y-2">
          <label className="flex gap-2 items-center text-muted-foreground">
            <Mail className="w-4 h-4" /> Email
          </label>
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="flex gap-2 items-center text-muted-foreground">
            <Lock className="w-4 h-4" /> Contraseña
          </label>
          <Input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={handleSignIn} className="w-full">
            Iniciar sesión
          </Button>
          <Button onClick={handleSignUp} variant="outline" className="w-full">
            Registrarse
          </Button>
        </div>
      </Card>
    </section>
  );
}
