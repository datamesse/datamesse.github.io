import React from 'react';
import '../App.css';
import Links from './Links';

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='section-title'>
                <div className='section-title-glow' />
                <div className='section-title-text'>CONTACT</div>
            </div>
            <p>Please feel free to contact me on these platforms:</p>
            <Links />
        </div>
    );
}

export default Contact;