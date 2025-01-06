import avatar from "./images/Avatar.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Gallery from "./component/Gallery";
import FAQ from "./component/FAQ";
import AboutUs from "./component/AboutUs";
import "./App.css";

function App() {
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
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>main</h2>
    </div>
  );
}
export default App;
