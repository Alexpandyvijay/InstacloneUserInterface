import React from 'react';
import landing from '../images/landing.jpg';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <div className='show'>
            <div className='content left'>
                <img src={landing} alt='loading......'></img>
            </div>
            <div className='content right'>
                <h1>Join Post</h1>
                <h5>make connection</h5>
                <Link to='/post'><button>Enter</button></Link>
            </div>
        </div>
    );

}
