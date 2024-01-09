import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;