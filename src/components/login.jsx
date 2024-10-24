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
    const hash = window.location.hash;
    console.log("URL completa:", window.location.href);
    console.log("Hash:", hash);

    if (hash) {
      const accessTokenMatch = hash.match(/access_token=([^&]*)/);
      console.log("accessTokenMatch:", accessTokenMatch);

      if (accessTokenMatch) {
        const accessToken = accessTokenMatch[1];
        Cookies.set("access_token", accessToken);
        localStorage.setItem("access_token", accessToken); // Guardar el token en localStorage
        setIsLoggedin(true);
        navigate('/secure'); // Navegar a secure.jsx
      }
    } else {
      console.log("No hash found in the URL");
    }
  }, [navigate]);

  return (
    <div>
      <button onClick={handleClick}>Login with Spotify</button>
    </div>
  );
}