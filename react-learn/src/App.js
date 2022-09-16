import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router , Route,Routes,Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
    <Router >
      <div className="container" style={{ 
                      backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/006/761/234/large_2x/gray-soft-backdrop-light-grey-background-free-photo.jpg")` 
                    }}>
    <Header className="container"/>
    <NavBar/>
    
            <Routes>
                    <Route exact path="/"      element={<Home/>}/>
                    <Route exact path="/order" element={<Homepage/>}/>
                    <Route exact path="/about" element={<AboutUs/>}/>
              </Routes>
      </div>
     </Router>
  );
}

export default App;
