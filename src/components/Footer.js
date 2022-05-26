import React from 'react';
import '../App.css';

function Footer() {

    let year =  new Date().getFullYear();

    return (
        <div className='footer'>
            <p>website coded by data messe | Ⓒ {year}</p>
            <a href="https://www.flaticon.com/uicons">User interface icons by Flaticon</a>
            <a href="https://storyset.com/data">Data illustration by Storyset</a>
        </div>


    );
}

export default Footer;