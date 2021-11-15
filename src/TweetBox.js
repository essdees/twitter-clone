import React, { useState } from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const[tweetMessage,setTweetMessage]= useState("");
    const[tweetImage,setTweetImage]= useState("");

    const sendTweet= e=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Snehdeep Singh',
            username:'essdees',
            verified:true,
            text: tweetMessage,
            image:tweetImage,
            avatar:'https://pbs.twimg.com/profile_images/1045236125315489792/BY_7HAX1_400x400.jpg'

        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form >
                <div className="tweetBox_input">
                    <Avatar/>
                    <input 
                    onChange={e=>setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="Whats Up" type="text"/>
                </div>
                    <input 
                    onChange={e=>setTweetImage(e.target.value)}
                    value={tweetImage} 
                    className="tweetBox_imageInput" placeholder="Enter Image Url" type="text"/>
                <Button type="submit" onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
