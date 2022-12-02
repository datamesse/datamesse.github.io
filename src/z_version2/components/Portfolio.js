import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import Separator from './Separator';
import portfolio from '../data/portfolio';

function Portfolio() {
    const data = portfolio;
    return (
        <>
            <Header />
            <div className='home'>
                <div className='body'>
                    <div className='portfolio' id='portfolio'>
                        <br />
                        <label className='section-title'>PORTFOLIO</label>
                        <div>
                            {data.map((project)=>{
                                return <Project project={project} />;
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <Footer />
        </>
    );
}

export default Portfolio;