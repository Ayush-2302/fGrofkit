import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import LandingPage from "./components/Landingpage";
import Login from "./components/Login";
import Darkmode from "./context/Darkmode";
import User from "./components/Blogs";
import Carrier from "./components/Carrier";
import Navbar from "./components/Navbar";

import Partner from "./components/Partner";
function App() {
  return (
    <Darkmode>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/blog" element={<User />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Partner" element={<Partner />} />
          <Route exact path="/carrier" element={<Carrier />} />
        </Routes>
        <Footer />
      </Router>
    </Darkmode>
  );
}

export default App;
