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
                            <path d="M15 18L9 12L15 6V18Z" fill="currentColor"/>
                            <path d="M9 18V6H7V18H9Z" fill="currentColor"/>
                        </svg>
                    </button>
                    <button id="play">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                        </svg>
                    </button>
                    <button id="next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6V18Z" fill="currentColor"/>
                            <path d="M15 18V6H17V18H15Z" fill="currentColor"/>
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