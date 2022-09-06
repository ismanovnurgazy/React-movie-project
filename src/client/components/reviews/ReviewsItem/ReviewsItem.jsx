import React from "react";

export default function ReviewsItem({ author, content, updated_at }) {
  return (
    <li>
      <h2>{author}</h2>
      <p>{content}</p>
      <p>{updated_at}</p>
    </li>
  );
}
