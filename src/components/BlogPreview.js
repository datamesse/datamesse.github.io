import React from 'react';
import Separator from './Separator';
import '../App.css';
import { Link } from 'react-router-dom';

function BlogPreview() {
    return (
        <div className='blog-preview' id='blog'>
            <Separator />
            <label className='section-title'>Blog</label>
            <Link to='/blog' target='_blank'>
                Click here to preview all blog posts
            </Link>
        </div>
    );
}

export default BlogPreview;