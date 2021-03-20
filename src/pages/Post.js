import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ServerUrl } from "../constants/serverUrl";

const Post = () => {
  const [post, setPost] = useState([]);
  const [loading,setLoading]=useState(false)
  const { id } = useParams();
  useEffect(() => {
setLoading(true)
    fetch(ServerUrl + `/posts/${id}`, {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => {setPost(data.post)
      setLoading(false)
      })
      .catch(console.error);
  }, []);

  if(loading){
    return <h1 className="container">Loading!!</h1>
  }
  else{
    return (
      <div className="container">
        <h2>{post.title}</h2>
        <p>{post.author?.name}</p>
        <p>{post.content}</p>
      </div>
    );
  };
  
  }
  
export default Post;
