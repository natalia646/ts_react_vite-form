import "./App.css";
import { Comments } from "./components/Comments";
import { Form } from "./components/Form";
import { getComments } from "./server/getComments";
import { getUsers } from "./server/getUsers";

const usersFromServer = getUsers();
const commentsFromServer = getComments();

const comments = commentsFromServer.map((comment) => {
  const user = usersFromServer.find((person) => person.id === comment.userId);

  return {
    ...comment,
    user,
  };
});

console.log(comments);

export const App = () => {
  return (
    <div>
      <Form users={usersFromServer}  />
      <Comments comments={comments} />
    </div>
  );
};
