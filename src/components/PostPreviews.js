import React from 'react';
import '../App.css';
import PostPreview from './PostPreview';
import Posts from '../data/posts.json';
import Separator from './Separator';

function PostPreviews() {

    const data = Posts;
    
    data.forEach(post => {
        post.excerpt = post.content.split(" ").slice(0, 30).join(" ") + ' . . . ';
    });

    return (
        <div className='blog' id='blog'>

            <Separator text="BLOG" />

            <div className='blog-preview-carousel'>
                {data.map((post)=>{
                    return <PostPreview post={post} />;
                })}
            </div>

        </div>
    );
}

export default PostPreviews;