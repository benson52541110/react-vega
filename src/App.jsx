import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import Shop from "./components/Shop";
// import Product from "./components/Product";
// import News from "./components/News";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="w-full">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="/shop" element={<Shop />} />
				<Route path="/product" element={<Product />} />
				<Route path="/news" element={<News />} /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
