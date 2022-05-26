import React from 'react';
import '../App.css';
import { icon_globe, logo_github } from '../data/assets';

function Project({ project }) {
    return (
        <div className='project'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <div className='project-links'>
                    {project.siteURL && (
                        <a href={project.siteURL} target='_blank'>
                            <div className='project-link-button'>
                                <img className='project-link-icon' src={ icon_globe } />SITE
                            </div>
                        </a>
                    )}
                    {project.codeURL && (
                        <a href={project.codeURL} target='_blank'>
                            <div className='project-link-button'>
                                <img className='project-link-icon' src={ logo_github } />CODE
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.description}</p>
                <div className='project-tags'>
                    {project.tags.map((tag) => {
                        return <label className='project-tag'>{tag}</label>;
                    })}
                </div>
            </div>
            <img src={project.photo} className='project-photo' />
        </div>
    );
}

export default Project;