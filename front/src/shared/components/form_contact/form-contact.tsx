"use client";

import { useState } from "react";

const FormularioContacto = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const errorMessage = validate(nombre, email);
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();

        login(nombre, email);
      }}
    >
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        autoComplete="off"
        value={nombre}
        onChange={(ev) => setNombre(ev.target.value)}
        
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></input>
      <p>{errorMessage}</p>
      <button type="submit">Enviar</button>
    </form>
  );
};
const login = (nombre: string, email: string) => {
  if (nombre === "Nahuel" && email === "hola@hola.com")
    alert("Tu consulta ha sido enviada");
  else alert("complete los campos requeridos");
};
const validate = (nombre: string, email: string | string[]) => {
    if (!nombre.toUpperCase()) return "Nombre incorrecto";
    if (!email.includes("@")) return "Email incorrecto";
  };
export default FormularioContacto;
