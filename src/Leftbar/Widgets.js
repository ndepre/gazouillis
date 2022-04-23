import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Quoi de neuf</h2>

        <TwitterTweetEmbed tweetId={"1517234724045037568"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CaMaKStream"
          options={{ height: 390 }}
        />

      </div>
    </div>
  );
}

export default Widgets;
