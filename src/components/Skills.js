import React from 'react';
import '../App.css';
import Separator from './Separator';
import { LinkedInSkills } from '../data/linkedinskills';
import Skill from './Skill';

function Skills() {
    const data = LinkedInSkills
    return (
        <div className='skills' id='skills'>
            <Separator />
            <label className='section-title'>LinkedIn Skills Assessments</label>
            <p>
                LinkedIn offers multiple choice tests and groups high performers in the Top 5, 15, and 30 percentiles.
                These charts indicate my skill, the number of people who took each test, and my group rank amongst them.
            </p>
            <p>
                For more information on my other skills, please visit my LinkedIn profile's Skills section.
                Or for more information on LinkedIn's assessments, please visit the links below.
            </p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/help/linkedin/answer/a507663" target='_blank'>How are LinkedIn Skill Assessments made and scored?</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/help/linkedin/answer/a507734" target='_blank'>What are the available LinkedIn Skill Assessments?</a>
                </li>
            </ul>
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