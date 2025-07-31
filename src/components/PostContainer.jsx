export default function PostContainer({ bugFeed }) {
      if (!bugFeed || bugFeed.length === 0) {
    return <p>No posts yet.</p>;
  } 
    return (
        <>
        {bugFeed.map((bug, index) => (
        <div key={index}>
          <h3>{bug.title}</h3>
          <p>Type:{bug.type}</p>
          <p>Severity:{bug.severity}</p>
          <p>{bug.description}</p>
          {bug.screenshot && (
            <div>
              <p>Screenshot:</p>
              <img
                src={URL.createObjectURL(bug.screenshot)}
                alt="Bug screenshot"
                width="200"
              />
            </div>
          )}
          <hr />
        </div>
      ))}
        </>
    )
}