import { useState, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import { supabase } from "../supabaseClient";

export default function HomeFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', error)
    } else {
      setPosts(data)
    }
  }

  return (
    <>
      <h1>Bug Feed</h1>
      <PostContainer bugPostFeed={posts} />
    </>
  );
}
