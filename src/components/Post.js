import React from 'react'
import { Redirect } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import '../App.css'
import Banner from './Banner'
import postList from '../data/posts.json'

export default function Post(props) {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to='/404' />
    }
    const fetchedPost = {}
    let postExists = false
    postList.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : 'No title given'
            fetchedPost.date = post.date ? post.date : 'No date given'
            fetchedPost.content = post.content ? post.content : 'No content given'
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to='/404' />
    }
    return (
        <>
            <Banner />
            <div className = 'post'>
                <h2>{fetchedPost.title}</h2>
                <small>{fetchedPost.date}</small>
                <ReactMarkdown escapeHtml={false}>{fetchedPost.content}</ReactMarkdown>
            </div>
        </>
    )
}