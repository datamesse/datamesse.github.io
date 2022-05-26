import React from 'react';
import '../App.css';

function Skill({ skill }) {
    return (
        <div className='skill'>
            <img className="skill-icon" src={ skill.icon } />
            <label className='skill-name'>{ skill.name }</label>
        </div>
    )
}

export default Skill;