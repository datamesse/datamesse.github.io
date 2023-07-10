import React from 'react';
import '../App.css';
import ProjectPreview from './ProjectPreview';
import portfolio from '../data/portfolio';
import Separator from './Separator';

/*
            <div className='portfolio-preview'>
                {data.map((project)=>{
                    return <Project project={project} />;
                })}
            </div>
*/

function ProjectPreviews() {
    const data = portfolio;

    return (
        <div className='portfolio' id='portfolio'>

            <Separator text="PORTFOLIO" />

            <div className='project-preview-carousel'>
                {data.map((project)=>{
                    return <ProjectPreview project={project} />;
                })}
            </div>

        </div>
    );
}

export default ProjectPreviews;