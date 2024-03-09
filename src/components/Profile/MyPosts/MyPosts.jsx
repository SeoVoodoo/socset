import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <div>            
            
            My posts
            <div>
                <textarea> </textarea>
                <button>Add Post</button>
            </div>        

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

