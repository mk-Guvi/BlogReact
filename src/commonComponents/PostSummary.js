import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
const PostSummary = ({ id,title, author, content }) => {
  return (
    <div>
      <Link to={routes.post.replace(":id",id)}>
        <h3>{title}</h3>
      </Link>
      <p>{author}</p>
      <p>{content.substring(0, 100) + "..."}</p>
    </div>
  );
};

export default PostSummary;
