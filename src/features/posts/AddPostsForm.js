import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./PostsSlice";
import { selectAllUsers } from "../users/UserSlice";


function AddPostsForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers)
  console.log(users);


  const dispatch = useDispatch();

  const onTitle = e => setTitle(e.target.value);
  const onContent = e => setContent(e.target.value);
  const onAuthor = e => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user=>(
    <option key={user.id} value={user.id}>
            {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add new Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitle} />

        <label htmlFor="postAuthor">Author:</label>
        <select name="" id="postAuthor" onChange={onAuthor}>
            <option></option>
            {usersOptions}
        </select>


        <label htmlFor="postContet">Post title:</label>
        <textarea type="text" id="postContet" name="postContet" value={content} onChange={onContent} />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save posts
        </button>
      </form>
    </section>
  );
}

export default AddPostsForm;
