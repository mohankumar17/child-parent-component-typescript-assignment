import React from "react";
import "./BookCover.css";

function BookCover() {
  return (
    <div className="cover">
      <div className="mask-group">
        <img src={require("./card-image.png")} alt="img" />
      </div>
    </div>
  );
}

export default BookCover;
