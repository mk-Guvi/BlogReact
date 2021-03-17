import React,{useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const AddPost = () => {
  const [title,setTitle]=useState("")
const [author,setAuthor]=useState("")//by default authors value is empty so if you not change ans select the author the form will not be submitted to avoid this setAuhtor is called in useeffect hook of authors
const [content,setcontent]=useState("")
  const onChangeTitle=event=>setTitle(event.target.value)
  const onChangeAuthor=event=>setAuthor(event.target.value)
  const onChangeContent=event=>setcontent(event.target.value)
  return (
    <div className="container">
      <h1>AddPost</h1>
      <Form>
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
            type="text"
            name="authorname"
            id="authorname"
            placeholder="Author's Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="contentText">Content</Label>
          <Input
            type="textarea"
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
