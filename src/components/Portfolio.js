import React from 'react';
import '../App.css';
import Project from './Project';
import Separator from './Separator';
import portfolio from '../data/portfolio';

function Portfolio() {
    const data = portfolio;
    return (
        <div className='portfolio' id='portfolio'>
            <Separator />
            <label className='section-title'>PORTFOLIO</label>
            <div>
                {data.map((project)=>{
                    return <Project project={project} />;
                })}
            </div>

        </div>
    );
}

export default Portfolio;