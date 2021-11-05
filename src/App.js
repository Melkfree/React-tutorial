import React, { useRef, useState } from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import PostItem from "./Components/PostItem";
import PostsList from "./Components/PostsList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    
    {
      "userId": 4,
      "id": 36,
      "title": "fuga nam accusamus voluptas reiciendis itaque",
      "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
    },
    {
      "userId": 4,
      "id": 37,
      "title": "provident vel ut sit ratione est",
      "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
    },
    {
      "userId": 4,
      "id": 38,
      "title": "explicabo et eos deleniti nostrum ab id repellendus",
      "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
    }
  ])
  
  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }
    

  return (
    <div className="App">
      <PostForm create={createPost}/>
        {posts.length !== 0?<PostsList remove={removePost} posts={posts} title="Post List"/>: <h1 style={{textAlign: 'center', verticalAlign: 'end'}}>Posts not found!</h1> }

      

    </div>
  );
}

export default App;
