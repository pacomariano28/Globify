import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/App.css'
import Login from './login.jsx'
import Secure from './home.jsx'
import Left from "./left.jsx";

function App() {

	return (
		<main>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Secure />} />
					<Route path="/left" element={<Left />} />
					{/* <Middle/>
					<Right/> */}
				</Routes>
			</Router>
		</main>
	);
}

export default App
