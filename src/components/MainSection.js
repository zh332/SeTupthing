import React from 'react';
import { Button } from './Button';
import './MainSection.css';
import '../App.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src="/video/amongus.mp4" autoPlay loop muted />
            <h1>SETuP THERAPY</h1>
            <p>helping you overcome weakness</p>
            <div className="main-btns">
            <Button className="btns" buttonStyle='btn--outline'
                buttonSize='btn--large'>SIGN UP NOW</Button>
            <Button className="btns" buttonStyle='btn--primary'
                buttonSize='btn--large' onClick="https://www.youtube.com/">WATCH<i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default MainSection
