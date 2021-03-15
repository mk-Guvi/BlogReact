import React, { useEffect, useState } from "react";
import Header from "../commonComponents/Header";
import { ServerUrl } from "../constants/serverUrl";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(ServerUrl + "/posts", {
      mode: "cors"
    })
      .then((res) =>res.json()
            )
      .then((data) =>
        //console.log(data)
        setPosts(data.posts)
      )
      .catch(console.error);
  }, []);
  return (
    <div>
      <Header />
      <h1>Home</h1>
      {posts.map((post, postIndex) => {
        return <p key={postIndex}>{post.title}</p>;
      })}
    </div>
  );
};

export default Home;
