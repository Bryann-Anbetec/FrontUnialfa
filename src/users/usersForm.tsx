import React, { useState } from "react";
import api from "../api";

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
    <div className="card">
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
    </div>
  );
};

export default UsersForm;
