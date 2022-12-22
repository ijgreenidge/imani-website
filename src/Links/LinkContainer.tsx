import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";

function LinksContainer(props: any) {
  return (
    <div className="section">
      <a href={props.link} target="_blank">
        <div className="row link z-depth-3">
          <p className="link-text">{props.title}</p>
        </div>
      </a>
    </div>
  );
}

export default LinksContainer;
