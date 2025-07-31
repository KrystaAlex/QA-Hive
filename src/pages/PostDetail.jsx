import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Type: {post.type}</p>
      <p>{post.description}</p>
      {post.screenshot_url && (
        <img
          src={post.screenshot_url}
          alt="Screenshot"
          style={{ maxWidth: "300px", height: "auto" }}
        />
      )}
      <p>Severity: {post.severity}</p>
      <p>Tags: {post.tags}</p>
      <p>Posted at: {new Date(post.created_at).toLocaleString()}</p>
    </div>
  );
}
