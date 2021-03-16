import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ServerUrl } from "../constants/serverUrl";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(ServerUrl + `/posts/${id}`, {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => setPost(data.post))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.author?.name}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
