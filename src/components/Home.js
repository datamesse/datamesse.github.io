import React from 'react';
import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Home;