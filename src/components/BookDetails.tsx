import React from "react";
import "./BookDetails.css";

type BookDetailsTypes = {
  title: string;
  author: string;
  time: number;
};

function BookDetails(props: BookDetailsTypes) {
  return (
    <div>
      <p className="title">{props.title}</p>
      <p className="author">{props.author}</p>
      <div className="read">
        <img
          src={require("./Vector.png")}
          className="clock-icon"
          alt="clock-img"
        />
        <span className="time">{props.time}-minute read</span>
      </div>

      <div className="status">
        <p>Read again</p>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default BookDetails;
