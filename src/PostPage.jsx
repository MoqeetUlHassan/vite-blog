import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import api from './api/posts'

const PostPage = ({ posts, handlePost }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter(post => post.id !== id)
            handlePost(postsList);
            navigate('/');
        }
        catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }


    return (

        <main className='PostPage'>
            <article className='post'>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not found</h2>
                        <p> sorry brother </p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>

                }
            </article>
        </main>
    )
}

export default PostPage