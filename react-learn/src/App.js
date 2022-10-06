import AboutUs from "./components/Pages/AboutUs";
import Header from "./components/NavBar/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Order from "./components/Pages/Order";
import ErrorNotFound from "./components/ErrorNotFound";
import { background_url } from "./images/types";
function App() {
  return (
    <Router>
      <div className="container" style={{ backgroundImage: background_url }}>
        <Header className="container" />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
