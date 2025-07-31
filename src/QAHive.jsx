import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreatePostPage from "./pages/CreatePostPage";
import HomeFeed from "./pages/HomeFeed";
import PostDetail from "./pages/PostDetail";
import Login from "./auth/Login";
import AuthorizedLayout from "./pages/AuthorizedLayout";
import "./QAHive.css";

export default function QAHive() {
  const [bugFeed, setBugFeed] = useState([]);

  const addBugFeed = (newFeed) => {
    setBugFeed((prev) => [newFeed, ...prev]);
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AuthorizedLayout />}>
          <Route index element={<HomeFeed bugFeed={bugFeed} />} />
          <Route
            path="create"
            element={<CreatePostPage onSubmit={addBugFeed} />}
          />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </>
  );
}
