import React from 'react'
import '../App.css'
import Banner from './Banner'
import PostList from './Postlist'

export default function Blog() {
    return (
        <>
            <Banner />
            <div className='blog'>
                <center>
                    <h1>BLOG</h1>
                    <PostList />
                </center>
            </div>
        </>
    )
}