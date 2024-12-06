import { useState } from "react";
import "./App.css";
import { Comments } from "./components/Comments";
import { CommentForm } from "./components/CommentForm";
import { getComments } from "./server/getComments";
import { getUsers } from "./server/getUsers";
import { Comment } from "./types/Comment";
import { getCommentsId } from "./utils/getCommentId";
import { User } from "./types/User";
import { UserForm } from "./components/UserForm";
import { getUserId } from "./utils/getUserId";

const usersFromServer = getUsers();
const commentsFromServer = getComments();

const allComments = commentsFromServer.map((comment) => {
  const user = usersFromServer.find((person) => person.id === comment.userId);

  return {
    ...comment,
    user,
  };
});

export const App = () => {
  const [comments, setComment] = useState<Comment[]>(allComments);
  const [users, setUsers] = useState<User[]>(usersFromServer);

  console.log(users);
  console.log(comments);

  const newCommentId = getCommentsId(comments);
  const newUserId = getUserId(users);

  const addComment = (newComment: Comment) => {
    setComment((prevComments) => [newComment, ...prevComments]);
  };

  const addUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <>
      <div className="forms">
        <CommentForm
          users={users}
          addComment={addComment}
          commentId={newCommentId}
        />
        <UserForm addUser={addUser} userId={newUserId} />
      </div>

      <Comments comments={comments} />
    </>
  );
};
