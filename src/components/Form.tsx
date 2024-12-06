import { User } from "../types/User";

type Props = {
  users: User[];
};

export const Form: React.FC<Props> = ({ users }) => {
  return (
    <form>
      <label>
        Title:
        <input type="text" placeholder="" />
      </label>

      <label>
        User:
        <select>
          <option>select user</option>
          {users.map((user) => (
            <option>{user.name}</option>
          ))}
        </select>
      </label>

      <label>
        Comment:
        <textarea name="" id=""></textarea>
      </label>

      <button type="submit">Add</button>
    </form>
  );
};
