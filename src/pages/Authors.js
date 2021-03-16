import React, { useEffect, useState } from "react";
import { ServerUrl } from "../constants/serverUrl";
import { ListGroup, ListGroupItem } from "reactstrap";
const Authors = () => {
  useEffect(() => {
    fetch(ServerUrl + "/author", {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => setAuthor(data.author));
  }, []);
  const [authors, setAuthor] = useState([]);
  return (
    <div className="container">
      <h1>Authors</h1>
      <ListGroup>
      {authors.map((author) => {
        return  <ListGroupItem key={author._id}>{author.name} </ListGroupItem>
      })}
      </ ListGroup>
    </div>
  );
};

export default Authors;
