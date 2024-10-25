import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/App.css'
import '../styles/colors.css'
import Login from './login.jsx'
import Home from './home.jsx'

function App() {

	return (
		<main>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App
