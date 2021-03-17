import React, { useEffect, useState } from "react";
// import Header from "../commonComponents/Header";
import { ServerUrl } from "../constants/serverUrl";
import PostSummary from "../commonComponents/PostSummary";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     setLoading(true);
    fetch(ServerUrl + "/posts", {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) =>{
            //console.log(data)
          setPosts(data.posts)
        setLoading(false);
      }
    
      )
      .catch(console.error)
      
  }, []);
    const [loading, setLoading] = useState(false);
   if(loading){
     return <h1 className="container">Loading!!</h1>
   }
   else{
    return (

      <div className="container">
        {/* <Header /> */}
        <h1>Home</h1>
        {/* {loading?<h1>LoadingApp</h1>} */}
        {posts.map((post, postIndex) => {
          return (
            <PostSummary
            id={post._id}
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
   }
  
};

export default Home;
