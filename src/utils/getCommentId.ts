import { Comment } from "../types/Comment";

export const getCommentsId = (comments: Comment[]) => {
  return comments.length + 1;
};
