import '../styles/footer.css';
import { getPlayer } from '../API/getPlayer';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [trackInfo, setTrackInfo] = useState(null);
    const [rangeValue, setRangeValue] = useState(50); // Valor inicial del rango

    const fetchPlayer = async () => {
        const data = await getPlayer();
        setTrackInfo(data);
    };

    useEffect(() => {
        fetchPlayer();
        const interval = setInterval(() => {
            fetchPlayer();
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
        e.target.style.setProperty('--range-value', `${e.target.value}%`);
    };

    return (
        <footer>
            <div id="left">
                {trackInfo && (
                    <>
                        <img src={trackInfo.album.images[0].url} alt="Album Photo" id="album" />
                        <div>
                            <h5>{trackInfo.name}</h5>
                            <p>{trackInfo.artists.map(artist => artist.name).join(', ')}</p>
                        </div>
                    </>
                )}
            </div>
            <div id="middle">
                <div id="control-panel">
                    <button id="previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6V18Z" fill="currentColor" />
                            <path d="M9 18V6H7V18H9Z" fill="currentColor" />
                        </svg>
                    </button>
                    <button id="play">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                        </svg>
                    </button>
                    <button id="next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6V18Z" fill="currentColor" />
                            <path d="M15 18V6H17V18H15Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    style={{ '--range-value': `${rangeValue}%` }}
                />
            </div>
            <div id="right">
                <p>derecha</p>
            </div>
        </footer>
    );
}

export default Footer;


/* 

import '../styles/footer.css';
import { getPlayer } from '../API/getPlayer';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [trackInfo, setTrackInfo] = useState(null);
    const [rangeValue, setRangeValue] = useState(0); // Valor inicial del rango
    const [duration, setDuration] = useState(0); // Duración de la canción

    const fetchPlayer = async () => {
        const data = await getPlayer();
        setTrackInfo(data);
        setDuration(data.duration_ms);
        setRangeValue((data.progress_ms / data.duration_ms) * 100);
    };

    useEffect(() => {
        fetchPlayer();
        const interval = setInterval(() => {
            fetchPlayer();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleRangeChange = async (e) => {
        const newValue = e.target.value;
        setRangeValue(newValue);
        const newPosition = (newValue / 100) * duration;
        await setPlayerPosition(newPosition);
    };

    const setPlayerPosition = async (position) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            throw new Error('No access token provided');
        }
        await fetch('https://api.spotify.com/v1/me/player/seek', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ position_ms: position })
        });
    };

    return (
        <footer>
            <div id="left">
                {trackInfo && (
                    <>
                        <img src={trackInfo.album.images[0].url} alt="Album Photo" id="album" />
                        <div>
                            <h5>{trackInfo.name}</h5>
                            <p>{trackInfo.artists.map(artist => artist.name).join(', ')}</p>
                        </div>
                    </>
                )}
            </div>
            <div id="middle">
                <div id="control-panel">
                    <button id="previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6V18Z" fill="currentColor" />
                            <path d="M9 18V6H7V18H9Z" fill="currentColor" />
                        </svg>
                    </button>
                    <button id="play">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                        </svg>
                    </button>
                    <button id="next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6V18Z" fill="currentColor" />
                            <path d="M15 18V6H17V18H15Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    style={{ '--range-value': `${rangeValue}%` }}
                />
            </div>
            <div id="right">
                <p>derecha</p>
            </div>
        </footer>
    );
}

export default Footer;

*/