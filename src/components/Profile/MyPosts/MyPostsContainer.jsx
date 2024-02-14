import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    const onPostChange = (text) => {
                        const action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return <MyPosts
                        addPost={addPost}
                        updateNewPostText={onPostChange}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;