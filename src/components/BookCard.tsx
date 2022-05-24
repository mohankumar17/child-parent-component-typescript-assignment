import React from "react";
import BookCover from "./BookCover";
import BookDetails from "./BookDetails";
import "./BookCard.css";

function BookCard() {
  return (
    <div className="card">
      <div className="rect">
        <BookCover></BookCover>
        <BookDetails
          title="Beyond Entrepreneurship"
          author={"Jim Collins & Bill Lazier"}
          time={13}
        ></BookDetails>
      </div>
    </div>
  );
}

export default BookCard;
