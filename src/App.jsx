import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Kids from "./pages/Kids"
import Mens from "./pages/Mens"
import Shop from "./pages/Shop"
import Womens from "./pages/Womens"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
