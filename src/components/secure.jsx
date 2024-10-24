import React, { useEffect } from 'react';
import Cookies from "js-cookie";

const Secure = () => {

  const getProfile = async (accessToken) => {
    try {
      if (!accessToken) {
        throw new Error('No access token provided');
      }
      console.log(accessToken);

      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    // Extraer el token del hash de la URL
    const hash = window.location.hash;
    const accessTokenMatch = hash.match(/access_token=([^&]*)/);

    if (accessTokenMatch) {
      const accessToken = accessTokenMatch[1];
      Cookies.set("access_token", accessToken); // Guardar el token en Cookies
      localStorage.setItem("access_token", accessToken); // Guardar el token en localStorage
      getProfile(accessToken); // Llamar a getProfile con el token
    } else {
      console.log("No access token found in the URL");
    }
  }, []);

  return (
    <div>
      <h1>Secure Page</h1>
      <p>Welcome to the secure page!</p>
    </div>
  );
};

export default Secure;