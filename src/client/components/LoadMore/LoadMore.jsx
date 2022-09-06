import React from "react";

export default function LoadMore({ onClick }) {
  return (
    <>
      <button className="btn loadmore" onClick={onClick}>
        Load more
      </button>
    </>
  );
}
