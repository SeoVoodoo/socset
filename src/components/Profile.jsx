import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img width="1000" src = "https://wallpapers.com/images/hd/dual-monitor-background-eycrdqoprfo59obs.jpg" alt="" />
            </div>
            <div>
                ava + desc
                <img src="https://sun9-33.userapi.com/c854528/v854528061/20a930/mdBGplDIEzk.jpg?ava=1" alt="" />
            </div>

            <div> 
                My post
                <div>
                    New Post
                </div>
            </div>

            <div className={s.posts}>          
                <div className={s.item}>
                    Post 1
                </div>
                <div className={`${s.item} ${s.active}`}>
                    Post 2
                </div>
            </div>
        </div>
    );
};

