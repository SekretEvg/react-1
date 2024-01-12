import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)

    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost();
    };
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;