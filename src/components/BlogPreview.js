import React from 'react';
import Separator from './Separator';
import '../App.css';
import { Link } from 'react-router-dom';

function BlogPreview() {
    return (
        <div className='blog-preview' id='blog'>
            <Separator />
            <label className='section-title'>Blog</label>
            <Link to='/blog'>
                Click here to go to all blog posts
            </Link>
        </div>
    );
}

export default BlogPreview;