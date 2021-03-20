import React, { useEffect, useState } from "react";
import { ServerUrl } from "../constants/serverUrl";
import { ListGroup, ListGroupItem } from "reactstrap";
const Authors = () => {
  useEffect(() => {
    setLoading(true);
    fetch(ServerUrl + "/author", {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(console.error);
  }, []);
  const [authors, setAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <h1 className="container">loading!!</h1>;
  } else {
    return (
      <div className="container">
        <h1>Authors</h1>
        <ListGroup>
          {authors.map((author) => {
            return (
              <ListGroupItem key={author._id}>{author.name} </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
};

export default Authors;
