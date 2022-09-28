import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import DrawerAppBar from "./app/components/DrawerAppBar";
import Footer from "./app/components/Footer";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
