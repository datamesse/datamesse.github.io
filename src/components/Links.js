import React from 'react';
import '../App.css';
import { SocialData } from '../data/social';

  function Links() {
    const data = SocialData;
    return (
        <div className='links'>
            {data.map((item)=>{
                return(
                        <a href={item.link}>
                            <div className='link'>
                                <img src={item.icon} className='link-icon' />
                            </div>
                        </a>
                )
            })}
        </div>);
}

export default Links;