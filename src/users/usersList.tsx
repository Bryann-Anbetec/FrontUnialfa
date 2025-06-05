import React, { useEffect, useState } from "react";
import api from "../api";

interface Users {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="card">
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.nome} - {user.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
