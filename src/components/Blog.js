import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import '../App.css'
import Banner from './Banner'
import Footer from './Footer'
import { assetURL } from '../data/data'
import Posts from '../data/posts.json'
import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
    logo_powerbi, logo_python, logo_react, logo_r, logo_tableau,logo_typescript, logo_visualstudio
  } from '../data/assets';


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
                                        <span className='blogstamp-overlay'>
                                            <img src= {`${ assetURL }${post.tag}.svg`} alt=''/>
                                        </span>
                                        <div className='blog-meta'>
                                            <small>Published {post.date}</small>
                                        </div>
                                        <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                                        <ReactMarkdown className='blog-desc' escapeHtml={false}>{excerptList[i]}</ReactMarkdown>
                                        <div className='blog-meta'>
                                            <small>
                                                <Link to={`/post/${post.id}`}>Read more...</Link>
                                            </small>
                                        </div>
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