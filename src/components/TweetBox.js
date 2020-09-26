import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../firebase";
import "./TweetBox.css";

export default function TweetBox() {
  const [tweet, setTweet] = useState("");
  const [tweetUrl, setTweetUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let response = db.collection("posts").add({
      displayName: "Aniket Nagapure",
      username: "aniketnagapure",
      text: tweet,
      image: tweetUrl,
      avatar:
        "https://pbs.twimg.com/profile_images/1299693377357713414/To186bRw_reasonably_small.jpg",
    });
    console.log({ response });
    setTweet("");
    setTweetUrl("");
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1299693377357713414/To186bRw_reasonably_small.jpg" />

          <input
            style={{ color: "#fff", fontSize: "20px" }}
            type="text"
            placeholder="What's happening?"
            typeof="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>

        <input
          style={{ color: "#fff", fontSize: "15px" }}
          type="text"
          value={tweetUrl}
          placeholder="GIF Url goes here!"
          className="tweetBox__imageInput"
          onChange={(e) => setTweetUrl(e.target.value)}
        />

        <Button variant="outlined" className="tweet__btn" type="submit">
          Tweet
        </Button>
      </form>
    </div>
  );
}
