import React from 'react'
import '../App.css'

export default function Footer() {

    let year =  new Date().getFullYear();

    return (
            <div className='footer'>
                <center>
                    <p>website coded by data messe | Ⓒ {year}</p>
                </center>
            </div>
    )
}