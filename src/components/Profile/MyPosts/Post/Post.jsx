import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return ( 
        <div className={s.item}>
            <img src="https://sun9-33.userapi.com/c854528/v854528061/20a930/mdBGplDIEzk.jpg?ava=1" alt="" />
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )   
};

