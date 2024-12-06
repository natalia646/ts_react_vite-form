import { useState } from "react";
import { User } from "../types/User";

type Props = {
  addUser: (newUser: User) => void;
  userId: number;
};

export const UserForm: React.FC<Props> = ({ addUser, userId }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      id: userId,
      name,
    };

    addUser(newUser);

    setName('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New User:
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button>Sing in</button>
    </form>
  );
};
