import { User } from "./User";

export interface Comment {
  id: number;
  comment: string;
  userId: number;
  user?: User;
  title: string;
}
