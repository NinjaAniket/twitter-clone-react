import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

export default function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {post.length > 0 ? (
        post?.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))
      ) : (
        <div className="loader">
          <CircularProgress disableShrink />
        </div>
      )}
    </div>
  );
}
