import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Order from "./components/Order";
import ErrorNotFound from "./components/ErrorNotFound";
function App() {
  return (
    <Router>
      <div
        className="container"
        style={{
          backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/006/761/234/large_2x/gray-soft-backdrop-light-grey-background-free-photo.jpg")`,
        }}
      >
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
