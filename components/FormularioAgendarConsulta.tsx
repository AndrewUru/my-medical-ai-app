import React from "react";

interface FormularioAgendarConsultaProps {
  especialista: string | null;
}

const FormularioAgendarConsulta: React.FC<FormularioAgendarConsultaProps> = ({
  especialista,
}) => {
  return (
    <div>
      <h2>Agendar Consulta</h2>
      <p>Especialista seleccionado: {especialista || "Ninguno"}</p>
      {/* Add form logic here */}
    </div>
  );
};

export default FormularioAgendarConsulta;
