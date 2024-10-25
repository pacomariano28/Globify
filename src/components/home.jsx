import { useEffect } from 'react';
import '../styles/home.css'
import '../styles/App.css'
import Navbar from './navbar.jsx';
import Left from "./left.jsx";

const Secure = () => {
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
		<section id='home'>
			{/* <section id='secure'>
			<h1>Secure Page</h1>
			<p>Welcome to the secure page!</p>
			<button onClick={getProfile}>APRIETAME</button>
		</section> */}

			<Navbar />
			<main>
				<Left />
			</main>
		</section>
	);
};

export default Secure;