import { NextResponse } from "next/server";
import OpenAI from "openai";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { reportText, userId } = await req.json(); // Ahora recibimos también userId

  // 1. Hacemos la llamada a OpenAI
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `
Eres un experto en medicina. Resume el informe que recibirá el usuario, explica términos médicos complejos y sugiere preguntas que podría hacer a su médico. Usa un lenguaje claro y profesional.
        `,
      },
      {
        role: "user",
        content: reportText,
      },
    ],
  });

  const result = completion.choices[0].message.content;

  // 2. Guardamos en Supabase
  const { error } = await supabaseAdmin.from("medical_reports").insert([
    {
      user_id: userId || null, // Si no hay usuario, null
      report_text: reportText,
      result_text: result,
    },
  ]);

  if (error) {
    console.error("Error guardando en Supabase:", error.message);
    return NextResponse.json({ result, supabaseError: error.message });
  }

  // 3. Devolvemos el resultado al frontend
  return NextResponse.json({ result });
}
