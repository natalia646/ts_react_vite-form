import { useState } from "react";
import { User } from "../types/User";
import { Comment } from "../types/Comment";

type Props = {
  users: User[];
  addComment: (newComment: Comment) => void;
  commentId: number;
};

export const CommentForm: React.FC<Props> = ({
  users,
  addComment,
  commentId,
}) => {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newComment: Comment = {
      id: commentId,
      comment,
      userId,
      user: users.find((user) => user.id === userId),
      title
    };

    addComment(newComment);

    setTitle("");
    setUserId(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        User:
        <select
          value={userId}
          onChange={(event) => setUserId(+event.target.value)}>
          <option disabled value={0}>
            Select user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Comment:
        <textarea
          name=""
          id=""
          value={comment}
          onChange={(event) => setComment(event.target.value)}></textarea>
      </label>

      <button type="submit">Add</button>
    </form>
  );
};
