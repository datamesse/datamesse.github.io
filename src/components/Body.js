import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import BlogPreview from './BlogPreview';
import Contact from './Contact';

function Body() {
    return (
        <div className='body'>
            <About />
            <Portfolio />
            <BlogPreview />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;