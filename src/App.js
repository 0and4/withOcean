import avatar from "./images/Avatar.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./component/Home";
import Gallery from "./component/Gallery";
import FAQ from "./component/FAQ";
import AboutUs from "./component/AboutUs";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.add("scroll-active");
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        document.body.classList.remove("scroll-active");
      }, 500);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <p id="logo">withOcean</p>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
            <div className="avatar">
              <img alt="avatar" src={avatar}></img>
            </div>
          </nav>
        </header>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
