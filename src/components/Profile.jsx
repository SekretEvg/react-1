import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                    alt="main content image"/>
            </div>
            <div>ava + content</div>
            <div>
                my posts
                <div>new post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;