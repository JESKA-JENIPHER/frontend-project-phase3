import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Players from "./pages/Players";
import Agents from "./pages/Agents";
import Teams from "./pages/Teams";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <div className="overallTop">
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
          <Route path="/players" element={<Players />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
