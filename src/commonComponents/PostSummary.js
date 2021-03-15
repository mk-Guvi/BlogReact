import React from "react";
const PostSummary = ({ title, author, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{content.substring(0, 100) + "..."}</p>
    </div>
  );
};

export default PostSummary;
