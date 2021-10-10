import React from 'react'
import '../App.css'
import Banner from './Banner'
import Footer from './Footer'
import portfolio from '../data/portfolio'

export default function Projects() {
    return (
        <>
            <Banner />
            <div className='projects'>
                <center>
                    <h1>PROJECTS</h1>
                    <div className='project-set'>
                    {
                        portfolio.map(function(port, index){
                            return (
                                <div key={index} className='project-tile'>
                                    <span className='stack-overlay'><img src={ port.stack } alt=''/></span>
                                        <div className='stamp-overlay'>{ port.stamp }</div>
                                    <img src={ port.photo } alt=''/>
                                    <div className='project-desc'>
                                        <p className='project-title'>{port.title}</p>
                                        <p>{port.description}</p>
                                    </div>
                                    <div className='project-link'>
                                        <a href={ port.siteURL } target='_blank'>SITE</a>
                                        <a href={ port.codeURL } target='_blank'>CODE</a>
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