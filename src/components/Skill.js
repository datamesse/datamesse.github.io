import React from 'react';
import '../App.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skill({ skill }) {
    return (
        <div className='skill'>

            <CircularProgressbarWithChildren
                strokeWidth={3}
                value={100 - skill.score}
                styles={buildStyles({
                    pathColor: "#23a9f2",
                    trailColor: "#E9F6FE"
                })}>
                <label className='skill-name'>{ skill.name }</label>
                <img className='skill-icon'
                  src={ skill.icon }
                  alt={ skill.name }
                />
                <label className='skill-score'>Top {`${ skill.score }%`} of {skill.taken}</label>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default Skill;