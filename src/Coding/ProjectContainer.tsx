import React from "react";
import { Link } from "react-router-dom";
import "./Coding.css";

function ProjectContainer(props: any) {
  return (
    <>
      <div className="container">
        <div className="row project">
          <h2>{props.name}</h2>
          <img src={props.img} />
        </div>
      </div>
    </>
  );
}
