import React from 'react';
import portfolio from '../data/portfolio';

function Projects() {
return (
<div className='projects'>
   <center>

       <div className='project-set'>
       {
           portfolio.map(function(port, index){
               return (
                   <div key={index} className='project-tile'>
                       <span className='stack-overlay'><img src={ port.stack } alt=""/></span>
                       <img src={ port.photo } alt=""/>
                       <div className='project-desc'>
                           <h3>{port.title}</h3>
                           <p>{port.description}</p>
                       </div>
                       <div className='project-link'>
                           <a href={ port.siteURL } target="_blank">SITE</a>
                           <a href={ port.codeURL } target="_blank">CODE</a>
                       </div>
                   </div>
               )
           })
       }
       </div>
   </center>
</div>
)
}

export default Projects