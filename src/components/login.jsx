import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleClick = () => {
    const callbackUrl = `http://localhost:5173/secure`;
    const client_id = "42795664fac94d9c9b9c5652dc320701";
    const targetUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${encodeURIComponent(callbackUrl)}&scope=user-read-private%20user-read-email`;
    window.location.href = targetUrl;
  };

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/secure");
    }
  }, [isLoggedin, navigate]);

  return (
    <div className="root">
      <div>
        <h1>Log in with Spotify</h1>
        <div className="btn-container">
          <button className="btn btn-primary" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 168 168"
              width={20}
              height={20}
            >
              <path
                fill="#1DB954"
                d="M84 0C37.8 0 0 37.8 0 84s37.8 84 84 84 84-37.8 84-84S130.2 0 84 0zm38.4 121.2c-1.2 1.8-3.6 2.4-5.4 1.2-15-9-33.6-11.4-55.8-6-2.4.6-4.8-.6-5.4-3-1.2-2.4.6-4.8 3-5.4 24.6-5.4 45.6-2.4 62.4 7.2 1.8 1.2 2.4 3.6 1.2 5.4zm7.2-18c-1.2 2.4-3.6 3-6 1.8-17.4-10.2-43.2-13.2-63.6-6.6-2.4.6-5.4-.6-6-3-1.2-2.4.6-5.4 3-6 23.4-7.2 52.2-4.2 72 7.8 2.4 1.2 3 3.6 1.8 6zm1.2-18c-1.2 3-4.2 4.2-7.2 2.4-20.4-12-51.6-13.2-70.2-6.6-3 .6-6.6-.6-7.8-3.6-1.2-3 .6-6.6 3.6-7.8 22.2-7.2 57-6 80.4 7.8 3 1.2 4.2 4.2 2.4 7.8z"
              />
            </svg>
            Log in with Spotify
          </button>
        </div>
      </div>
    </div>
  );
}