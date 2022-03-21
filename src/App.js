import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About.js/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import HappyTutor from "./Pages/HappyTotur/HappyTutor";
import Offer from "./Pages/Home/Offer";
import Contact from "./Pages/Contact/Contact";
import Signin from "./Pages/Signin/Signin";
import NotFound from "./Pages/NotFound";
import Resister from "./Pages/Signin/Resister";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Offer />} />
        <Route path="/blog" element={<HappyTutor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/resister" element={<Resister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
