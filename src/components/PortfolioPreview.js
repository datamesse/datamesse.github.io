import React from 'react';
import '../App.css';
import Project from './Project';
import portfolio from '../data/portfolio';
import { Link } from 'react-router-dom';

function PortfolioPreview() {
    const data = portfolio;
    return (
        <div className='portfolio' id='portfolio'>

            <div className='section-title'>
                <div className='section-title-glow' />
                <div className='section-title-text'>MY PORTFOLIO PREVIEW</div>
            </div>

            <Link to='/portfolio'>
                <h3>Click here to see all projects with descriptions and code links</h3>
            </Link>

            <div className='portfolio-preview'>
                {data.map((project)=>{
                    return <Project project={project} />;
                })}
            </div>

        </div>
    );
}

export default PortfolioPreview;