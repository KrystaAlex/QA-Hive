import { format } from "date-fns";

export default function PostContainer({ bugPostFeed }) {
  if (!bugPostFeed || bugPostFeed.length === 0) {
    return <p>No posts yet.</p>;
  }
  return (
    <>
      {bugPostFeed.map((bugPost, index) => {
        const date = new Date(bugPost.created_at || bugPost.createdAt); 
        const isValidDate = !isNaN(date);

        return (
          <div key={index}>
            <h3>{bugPost.title}</h3>
            <p>Type: {bugPost.type}</p>
            <p>{bugPost.description}</p>
            {isValidDate ? (
              <p>Posted on {format(date, "MMM d, yyyy, h:mm a")}</p>
            ) : (
              <p>Posted on unknown date</p>
            )}
            <hr />
          </div>
        );
      })}
    </>
  );
}
