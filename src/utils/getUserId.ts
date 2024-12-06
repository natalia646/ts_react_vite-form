import { User } from "../types/User";

export const getUserId = (users: User[]) => {
  return users.length + 1;
};
