import React from "react";

export const Card = ({ image, theme }) => {
  return (
    <div className={`card ${theme}`}>
      <img src={image} className="card-img-top icon" alt="..." />
      <div>
        <h5>EASY TO IMPLEMENT AND USE</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};
