import { Comment } from "../types/Comment";

type Prop = {
  comments: Comment[];
};

export const Comments: React.FC<Prop> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
            <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};
