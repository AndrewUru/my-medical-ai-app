import React from "react";

interface SelectorEspecialistaProps {
  onSeleccionar: (especialista: string) => void;
}

const SelectorEspecialista: React.FC<SelectorEspecialistaProps> = ({
  onSeleccionar,
}) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSeleccionar(event.target.value);
  };

  return (
    <div>
      <label htmlFor="especialista">Selecciona un especialista:</label>
      <select id="especialista" onChange={handleSelect}>
        <option value="cardiologia">Cardiología</option>
        <option value="neurologia">Neurología</option>
        <option value="pediatria">Pediatría</option>
      </select>
    </div>
  );
};

export default SelectorEspecialista;
