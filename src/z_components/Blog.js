import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import '../App.css'
import Banner from './Banner'
import Footer from './Footer'
import { assetURL } from '../data/data'
import Posts from '../data/posts.json'

export default function Blog() {
    const excerptList = Posts.map(post => {
        return post.content.split(" ").slice(0, 30).join(" ") + ' . . . '
    })

    console.log(Posts)
    return (
        <>
            <Banner />
            <div className='blog'>
                <center>
                    <div className='project-set'>
                    {
                        Posts.length &&
                            Posts.map((post, i) => {
                                return (
                                    <div key={i} className='blog-tile'>
                                        <div className='blog-tile-header'>
                                            <span className='blogstamp-overlay'>
                                                <img src= {`${ assetURL }${post.tag}.svg`} alt=''/>
                                            </span>
                                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                                        </div>
                                        <div className='blog-meta'>
                                            <small>{post.date}</small>
                                        </div>
                                        <ReactMarkdown className='blog-desc' escapeHtml={false}>{excerptList[i]}</ReactMarkdown>
                                        <div className='blog-meta'>
                                            <small>
                                                <Link to={`/post/${post.id}`}>Read more...</Link>
                                            </small>
                                        </div>
                                        <div className='blog-tile-footer'></div>
                                    </div>
                                )
                            })
                    }
                    </div>
                </center>
            </div>
            <Footer />
        </>
    )
}