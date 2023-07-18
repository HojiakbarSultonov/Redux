import './App.css';
import Counter from './features/counter/Counter';
import AddPostsForm from './features/posts/AddPostsForm';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <PostList/>
      <AddPostsForm/>
    </div>
  );
}

export default App;
