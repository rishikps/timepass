import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import './App.css';

/**
 * -------------------------------------------------------
 * React Scroll Parallax
 * -------------------------------------------------------
 * 
 * Experimenting with some scroll based parallax effects 
 * using React. See react-scroll-parallax:
 * https://github.com/jscottsmith/react-scroll-parallax
 *
 */

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const R1 = {
    bounds: [135, 281],
    forms: [
        <svg viewBox="0 0 135 281" version="1.1">
            <path className="fill-2" d="M67,22H0v134h67c37,0,67-30,67-67S104,22,67,22z"/>
        </svg>,
        <svg viewBox="0 0 135 281" version="1.1">
            <polygon className="fill-6" points="55,226 55,92 135,226 "/>
        </svg>,
        <svg viewBox="0 0 135 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204"/>
        </svg>,
    ]
};


const I2 = {
    bounds: [135, 281],
    forms: [
        <svg viewBox="0 0 135 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204"/>
        </svg>,
    ]
};

const K3 = {
    bounds: [135, 281],
    forms: [
        <svg viewBox="0 0 135 281" version="1.1">
            <polygon className="fill-3" points="55,22 55,145 135,22 "/>
        </svg>,
        <svg viewBox="0 0 135 281" version="1.1">
            <polygon className="fill-6" points="55,226 55,92 135,226 "/>
        </svg>,
        <svg viewBox="0 0 135 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204"/>
        </svg>,
    ]
};

const S4 = {
    bounds: [275, 300],
    forms: [
	<svg viewBox="0 150 150 300">
		<clipPath id="cut-off-bottom">
			<rect x="0" y="70" width="160" height="160" />
		</clipPath>
		<circle cx="90" cy="230" r="60" clip-path="url(#cut-off-bottom)" className="fill-2" /> 
	</svg>,
	<svg viewBox="0 150 150 300">
		<clipPath id="cut-off-top">
			<rect x="0" y="230" width="160" height="160" />
		</clipPath>
		<circle cx="60" cy="230" r="60" clip-path="url(#cut-off-top)" className="fill-3" /> 
	</svg>,
    ], 
};

const E5 = {
    bounds: [110, 300],
    forms: [
        <svg viewBox="0 0 110 300" version="1.1">
	    <rect className="fill-2" y="22" width="204" height="55"/>
        </svg>,
	<svg viewBox="0 0 110 300" version="1.1">
	    <rect className="fill-4" y="110" width="100" height="30"/>
        </svg>,
	<svg viewBox="0 0 110 300" version="1.1">
	    <rect className="fill-6" y="172" width="204" height="55"/>
        </svg>,
	<svg viewBox="0 0 110 300" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204"/>
        </svg>
    ],
};

const Gradients = () => (
    <svg width="50" height="50" version="1.1" className="hidden">
        <defs>
            <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6ED0DD" />
                <stop offset="100%" stopColor="#70E2B9" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#405D86" />
                <stop offset="100%" stopColor="#384257" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ED6088" />
                <stop offset="100%" stopColor="#C86FA3" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F07F6B" />
                <stop offset="100%" stopColor="#EFC15C" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8D63B1" />
                <stop offset="100%" stopColor="#8179CB" />
            </linearGradient>
            <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#EDD460" />
                <stop offset="100%" stopColor="#EDBC39" />
            </linearGradient>
        </defs>
    </svg>
);

//const word = [P1, A2, R3, A4, L5, L6, A7, X8];
const word = [R1, I2, K3, S4, E5 ,S4];

class Letter extends React.Component {
    render() {
        const { letter } = this.props;
        const offset = getRandomInt(50, 150);
        const isSlower = getRandomInt(0, 1) ? true : false;
        return (
            <div className="letter" style={{
                width: letter.bounds[0] / 10 + 'rem',
                height: letter.bounds[1] / 10 + 'rem',
            }}>
                {letter.forms.map((X, i) => 
                    <Parallax
                        className="form"
                        key={i}                        
                        offsetYMin={-offset * (i + 1) + 'px'}
                        offsetYMax={offset * (i + 1) + 'px'}
                        slowerScrollRate={isSlower}
                    >
                        {X}
                    </Parallax>
                )}
            </div>
        );
    }
}

const Scroll = () => (
    <div className="scroll">
        <p>Scroll</p>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
            <polygon className="fill-4" points="167,73 83.5,298.9 0,73 "/>
            <polygon className="fill-2" points="137.4,0 83.5,145.9 29.6,0 "/>
        </svg>
    </div>
);

const ParallaxWord = () => (
    <div className="word">
        {word.map((X, i) => 
            <Letter key={i} letter={X} />
        )}
    </div>
);

export default class App extends Component 
{
	render()
	{
		return(
		    <ParallaxProvider>
			<main>
			    <Scroll />
			    <Gradients />
			    <ParallaxWord />
			</main>
		    </ParallaxProvider>
		);
	}
}

