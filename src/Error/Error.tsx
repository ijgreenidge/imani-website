import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import { ContentDiv } from "./Error.styles";

function Error() {
  return (
    <div className="container center">
      <ContentDiv className="row">
        <img src="images/imanilogo.png" width="350" />
        <h1>Error 404: Page Not Found. </h1>
        <Link to="/">
          <h4 className="purple-text">
            <u>Click Here To Go Back To the Homepage.</u>
          </h4>
        </Link>
      </ContentDiv>
    </div>
  );
}

export default Error;
