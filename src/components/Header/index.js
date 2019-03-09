import React from "react";
import "./style.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>

    <div className="scores">
      <p>Click on all images without any repeats! Try for a perfect score of 12!<br /><br/>

        Score: {props.score}<br />
        High Score: {props.highscore}</p>
    </div>
  </div>
);

export default Header;
