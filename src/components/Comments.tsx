import { Comment } from "../types/Comment";

type Prop = {
  comments: Comment[];
};

export const Comments: React.FC<Prop> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div>
            <h2>{comment.title}</h2>
            <p>{comment.comment}</p>
            <p style={{ color: "gray" }}>{comment.user?.name}</p>
          </div>

          <div className="comments-buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
