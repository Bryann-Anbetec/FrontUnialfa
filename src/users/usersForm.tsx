import React, { useState } from "react";
import api from "../api";
import { motion } from "framer-motion";

interface Users {
  nome: string;
  email: string;
  senha: string;
}

const UsersForm: React.FC = () => {
  const [user, setUser] = useState<Users>({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/users", user);
    setUser({ nome: "", email: "", senha: "" });
    alert("Usuário cadastrado!");
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="nome" value={user.nome} onChange={handleChange} required />
        <label>Email</label>
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <label>Senha</label>
        <input
          name="senha"
          type="password"
          value={user.senha}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </motion.div>
  );
};

export default UsersForm;
