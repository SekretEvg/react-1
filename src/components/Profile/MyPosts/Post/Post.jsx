import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'/>
            {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;