import React from "react";
import "./style.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} High Score: {props.highscore}
    </div>
  </div>
);

export default Header;
