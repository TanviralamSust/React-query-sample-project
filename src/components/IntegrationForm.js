import axios from "axios";
import { useState } from "react";
// import Button from "./Button";
// import Form from "./Form";
// import TextInput from "./TextInput";

export default function IntegrationForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const method = "POST";
  const url = "https://jsonplaceholder.typicode.com/posts";
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      id: 1,
      title: title,
      body: body,
      userId: 1,
    }
    try {
      const res = await axios.request({
        headers,
        data: payload,
        method,
        url,
      });
      alert(JSON.stringify(res.data));
    } catch (e) {
      console.log("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        name="Post title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter details"
        name="Post details"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button type="submit">Submit Now</button>
    </form>
  );
}
