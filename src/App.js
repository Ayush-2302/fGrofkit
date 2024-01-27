import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import LandingPage from "./components/Landingpage";
import Login from "./components/Login";
import Darkmode from "./context/Darkmode";
import Menu from "./components/Menu";
import User from "./components/Blogs";
import Carrier from "./components/Carrier";
import Nave2 from "./components/Nave2";
function App() {
  return (
    <Darkmode>
      <Router>
        {/* <Navbar /> */}
        <Nave2/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/blog" element={<User />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/carrier" element={<Carrier />} />
        </Routes>
        <Footer />
      </Router>
    </Darkmode>
  );
}

export default App;
