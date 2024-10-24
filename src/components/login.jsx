import '../styles/login.css';

export default function Login() {
  const handleClick = () => {
    const callbackUrl = `http://localhost:5173/secure`;
    const client_id = "42795664fac94d9c9b9c5652dc320701";
    const targetUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${encodeURIComponent(callbackUrl)}&scope=user-read-private%20user-read-email`;
    window.location.href = targetUrl;
  };
  return (
    <div>
      <button onClick={handleClick}>Login with Spotify</button>
    </div>
  );
}