import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = (posts) => {
    const [post, setPost] = useState({title:'', body:''});

    return(
        <form >
            <MyInput type="text" placeholder="Post title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
            <MyInput type="text" placeholder="Post description" value={post.body} onChange={e => setPost({...post, body: e.target.value})} />
            <MyButton onClick={addNewPost} >Create POST</MyButton>        
        </form>
    )
}



export default PostForm;