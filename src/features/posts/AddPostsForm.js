import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./PostsSlice";


function AddPostsForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitle = e => setTitle(e.target.value);
  const onContent = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add new Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitle} />
        <label htmlFor="postContet">Post title:</label>
        <textarea type="text" id="postContet" name="postContet" value={content} onChange={onContent} />
        <button type="button" onClick={onSavePostClicked}>
          Save posts
        </button>
      </form>
    </section>
  );
}

export default AddPostsForm;
