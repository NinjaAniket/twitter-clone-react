import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import { Search } from "@material-ui/icons";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__search" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__container">
        <h2>Relevant Post</h2>
        <TwitterTweetEmbed tweetId="1309856249845035009" />

        <TwitterTimelineEmbed
          screenName="freecodecamp"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}
