import React from "react";
import "../../assets/css/style.css";

const posts = [
    {
        id: 1,
        text: "Lorem ipsum",
        user: {
            avatar: "/uploads/avatar1.jpg",
            username: "Test User 1"
        }
    },
    {
        id: 2,
        text: "Lorem ipsum",
        user: {
            avatar: "/uploads/avatar2.jpg",
            username: "Test User 2"
        }
    },
];

export default function App() {
    return (
        <div className="container">
            <div className="feed">
                {posts.map(post => 
                    <div key={post.id} className="post">
                        <div className="header">
                            <img src={post.user.avatar} />
                            <h2>{post.user.username}</h2>
                        </div>
                        <p className="content">{post.text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};