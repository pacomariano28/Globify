import '../styles/login.css'

const Login = () => {
	const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = "dc54a9351ae3413bacbf6cb7d799d457";
    console.log(client_id);

	var authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
		},
		form: {
			grant_type: 'client_credentials'
		},
		json: true
	};

	request.post(authOptions, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			var token = body.access_token;
		}
	});

	return (
		<section>
			<h2>{token}</h2>
		</section>
	)
}

export default Login;