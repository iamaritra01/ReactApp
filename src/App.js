import logo from "./logo.svg";
import "./App.css";
// import '../src/index.css';
import { Routes, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Menu/Home";
import Services from "./Menu/Services";
import About from "./Menu/About";
import Contact from "./Menu/Contact";
import Navbar from "./Components/Navbar";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">

    <Navbar />
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
