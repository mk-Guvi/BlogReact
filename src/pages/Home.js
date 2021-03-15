import React, { useEffect, useState } from "react";
import Header from "../commonComponents/Header";
import { ServerUrl } from "../constants/serverUrl";
import PostSummary from "../commonComponents/PostSummary";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(ServerUrl + "/posts", {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) =>
        //console.log(data)
        setPosts(data.posts)
      )
      .catch(console.error);
  }, []);
  return (
    <div className="container">
      <Header />
      <h1>Home</h1>
      {posts.map((post, postIndex) => {
        return (
          <PostSummary
            key={postIndex}
            title={post.title}
            author={post.author.name}
            content={post.content}
          />
          // <div key={postIndex}>
          //   <h3>{post.title}</h3>
          //   <p>{post.author.name}</p>
          //   <p>{post.content.substring(0, 100) + "..."}</p>
          // </div>
        );
      })}
    </div>
  );
};

export default Home;
