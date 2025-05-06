"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Ene", consultas: 30 },
  { name: "Feb", consultas: 45 },
  { name: "Mar", consultas: 60 },
  { name: "Abr", consultas: 75 },
  { name: "May", consultas: 90 },
];

export default function ConsultasChart() {
  return (
    <section className="max-w-4xl mx-auto my-16 p-6 bg-white rounded-lg shadow-md">
      <motion.h2
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Consultas realizadas en la app
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-64"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="consultas" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}
