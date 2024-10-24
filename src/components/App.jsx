import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/App.css'
import Login from './login.jsx'
import Secure from './secure.jsx'

function App() {

  return (
	<main>
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/secure" element={<Secure />} />
			</Routes>
		</Router>
	</main>
  );
}

export default App
