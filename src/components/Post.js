import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutlineRounded,
  FavoriteBorder,
  PublicOutlined,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";

import "./Post.css";

function Post({ displayName, username, text, avatar, image }) {
  console.log(image);
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerBage">{`@${username}`}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt={image} />

        <div className="post__footer">
          <FavoriteBorder fontSize="small" />
          <Repeat fontSize="small" />
          <ChatBubbleOutlineRounded fontSize="small" />
          <PublicOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
