import React from 'react'
import '../App.css'
import Posts from '../data/posts.json'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

export default function PostList() {

    const excerptList = Posts.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })

    console.log(Posts)
    return (
        <div className='postlist'>
            {
                Posts.length &&
                    Posts.map((post, i) => {
                        return (
                            <div key={i} className='post-card'>
                                <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                                <small>Published {post.date}</small>
                                <ReactMarkdown escapeHtml={false}>{excerptList[i]}</ReactMarkdown>
                                <small><Link to={`/post/${post.id}`}>Read more...</Link></small>
                                <hr/>
                            </div>
                        )
                    })
            }
        </div>
    )
}