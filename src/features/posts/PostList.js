import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './PostsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

function PostList() {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice((a,b)=>b.date.localeCompare(a.date))  

    const renderPosts = orderedPosts.map(post=>(
        <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p className='postCredit'>
                  <PostAuthor userId = {post.userId}/>
                  <TimeAgo timestamp={post.date}/>
                </p>
        </article>
    ))
  return (
    <section>
        <h1>Posts</h1>
       {renderPosts}
      
    </section>
  )
}

export default PostList
