import React, { useEffect, useState } from "react";
import api from "../api";
import { motion, AnimatePresence } from "framer-motion";

interface Users {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.nome.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <h2>Lista de Usuários</h2>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <input
          type="text"
          placeholder="Buscar usuário..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        <AnimatePresence>
          {filteredUsers.map((user) => (
            <motion.li
              key={user.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <span>
                {user.nome} - {user.email}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default UsersList;
