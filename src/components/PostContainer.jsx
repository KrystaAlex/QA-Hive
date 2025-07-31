import { format } from "date-fns";

export default function PostContainer({ bugFeed }) {
      if (!bugFeed || bugFeed.length === 0) {
    return <p>No posts yet.</p>;
  } 
    return (
        <>
        {bugFeed.map((bugPost, index) => (
        <div key={index}>
          <h3>{bugPost.title}</h3>
          <p>Type:{bugPost.type}</p>
          <p>{bugPost.description}</p>
          <p>Posted on {format(new Date(bugPost.createdAt), 'MMM d, yyyy, h:mm a')}</p>
          <hr />
        </div>
      ))}
      </>
    )
}