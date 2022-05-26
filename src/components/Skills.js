import React from 'react';
import '../App.css';
import Separator from './Separator';
import { LinkedInSkills } from '../data/linkedinskills';
import Skill from './Skill';
import { avatar, background,
    icon_calendarlinespen, icon_charthistogram, icon_crosscircle, icon_diploma, icon_edit, icon_magicwand, icon_menuburger, icon_paperplane, 
    logo_github, logo_linkedin, logo_powerbi, logo_tableau, logo_twitter, 
    logoblue_github, logoblue_linkedin, logoblue_powerbi, logoblue_tableau, logoblue_twitter 
} from '../data/assets';

function Skills() {
    const data = LinkedInSkills
    return (
        <div className='skills' id='skills'>
            <Separator />
            <label className='section-title'>LinkedIn Skills Assessments</label>
            <div>
                {data.map((item) => {
                    return (
                        <div className='skills-section'>
                            <label className='skills-section-title'>{item.type}</label>
                            <div className='skills-list'>
                                {item.list.map((skill) => {
                                    return (
                                        <Skill skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;