import React from "react";

const PostItem = function(){


    return(
        <div className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                Javascript - is programming language
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostItem;