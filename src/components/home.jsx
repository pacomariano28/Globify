import React, { useEffect } from 'react';
import '../styles/secure.css'

const Secure = () => {

	const getProfile = async () => {
		try {
		  const token = localStorage.getItem("accessToken");
		  if (!token) {
			throw new Error('No access token provided');
		  }
		  const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
			headers: {
			  Authorization: 'Bearer ' + token
			}
		  });
	
		  if (!response.ok) {
			throw new Error('Failed to fetch profile');
		  }
	
		  const data = await response.json();
		  console.log(data);
		  return data;
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
		  localStorage.setItem("accessToken", accessToken);
		 
		} else {
		  console.log("No access token found in the URL");
		}
	  }, []);

	return (
		<section id='secure'>
			<h1>Secure Page</h1>
			<p>Welcome to the secure page!</p>
			<button onClick={getProfile}>APRIETAME</button>
		</section>
	);
};

export default Secure;