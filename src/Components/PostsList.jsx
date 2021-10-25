import React from "react";
import PostItem from "./PostItem";

const PostsList = ({posts}) => {  
    return(
        <div>
            <h1 style={{textAlign:'center'}} >Posts list</h1>
            {posts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostsList;