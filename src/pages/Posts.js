import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams, useNavigate} from 'react-router-dom';
import '../css/Posts.css';

function Posts({ user }) {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    const navigate = useNavigate() 


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data = data.filter(p => p.userId === user.id);
                setPosts(data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, [user]);

    const handleCommentsClick = (postId) => {
        setSelectedPostId(postId);

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => {
                setComments(data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    };


    const handlePostClick = (postId) => {
        navigate(`/Posts/${postId}`)
    };

    return (
        <div>
            <h2>Posts</h2>
            <div className="posts-container">
                {posts.map(post => (
                    <div onClick={() => handlePostClick(post.id)} key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        {selectedPostId === post.id ? (
                            <div>
                                <h4>Comments:</h4>
                                {comments.map(comment => (
                                    <div key={comment.id} className="comment">
                                        <p>"Name: " {comment.name}</p>
                                        <p>"Email: " {comment.email}</p>
                                        <p>{comment.body}</p>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                        <button onClick={() => handleCommentsClick(post.id)}>View Comments</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;







// function Posts(){
//     return(
//         <div  className="content">
//             Posts
//         </div>
//     )
// }

// export default Posts;