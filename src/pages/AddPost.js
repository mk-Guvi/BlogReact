import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ServerUrl } from "../constants/serverUrl";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(""); //by default authors value is empty so if you not change ans select the author the form will not be submitted to avoid this setAuhtor is called in useeffect hook of authors
  const [content, setcontent] = useState("");
  const [authors, setAuthors] = useState([]);
  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeAuthor = (event) => setAuthor(event.target.value);
  const onChangeContent = (event) => setcontent(event.target.value);
  useEffect(() => {
    fetch(ServerUrl + "/author", {
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAuthors(data.author);
      console.log(data.author[0]._id);
        setAuthor(data.author[0]._id); //this changes the default value from empty to value of first index of aray.
      })
      .catch(console.error);
  }, []);
  const onFormSubmit = (e) => {
    e.preventDefault(); //it prevents reloading the page after submitting form
    const reqBody = {
      title,
      content,
      authorId: author
    };
    fetch(`${ServerUrl}/posts`, {
      headers: { "Content-Type": "application/json" }, //the server will not understand that the data sent is in json format,that why the header content type is used
      method: "POST",
      mode: "cors",
      body: JSON.stringify(reqBody)
    })
      .then((res) => {
        return res.json();
      })

      .then((result) => alert(result))

      .catch(console.error());
  };
  return (
    <div className="container">
      <h1>AddPost</h1>
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTitle}
            id="title"
            placeholder="Title Post"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authorname">Author</Label>
          <Input
            type="select"
            value={author}
            onChange={onChangeAuthor}
            name="authorname"
            id="authorname"
            placeholder="Author's Name"
            required
          >
            {authors.map((each, eachIndex) => {
              return (
                <option value={each._id} key={eachIndex}>
                  {each.name}
                </option>
              );
            })}
            {/* In html we add selected attribute as true and disable it so that
            users can select manually but in react due to rerendering happens
            once selecting the selected filed is not used.
            <option selected={author === ""} disabled>
              select an option
            </option> */}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="contentText">Content</Label>
          <Input
            type="textarea"
            value={content}
            onChange={onChangeContent}
            rows="10"
            name="content"
            id="content"
            required
          />
        </FormGroup>

        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddPost;
