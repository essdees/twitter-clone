import React, { useState,useEffect } from 'react'
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const[posts,setPosts]=useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
           <h2>Home</h2> 

            </div>

            <TweetBox/>
                <FlipMove>
                {posts.map(post=>(
                    <Post key={post.text}
                    username={post.username}
                    image={post.image}
                    displayName={post.displayName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    />

                ))}
                </FlipMove>
            
        </div>
    )
}

export default Feed
