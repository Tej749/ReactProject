import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
