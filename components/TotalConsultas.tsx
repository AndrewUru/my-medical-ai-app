"use client";

import { useEffect, useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function TotalConsultas() {
  const supabase = createPagesBrowserClient();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchTotal = async () => {
      const { count, error } = await supabase
        .from("medical_reports")
        .select("*", { count: "exact", head: true });

      if (!error && count !== null) {
        setTotal(count);
      }
    };

    fetchTotal();
  }, [supabase]);

  const data = [
    {
      name: "Consultas",
      value: total,
      fill: "#3b82f6", // Azul Tailwind
    },
  ];

  return (
    <section className="max-w-md mx-auto my-16 p-6 bg-white rounded-lg shadow-md text-center">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Total de consultas realizadas
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-72"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            barSize={20}
            data={data}
          >
            <RadialBar dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>

        <motion.p
          className="text-4xl font-bold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {total}
        </motion.p>
      </motion.div>
    </section>
  );
}
