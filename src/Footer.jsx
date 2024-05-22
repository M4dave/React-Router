import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";
import Yellow from "./Yellow";
import Orange from "./Orange";
import Purple from "./Purple";
import Brown from "./Brown";
import Pink from "./Pink";
import Gray from "./Gray";
import Black from "./Black";

export default function Footer() {
  return (
    <footer className="footer">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/home" element={<Home />} />
        <Route path="/green" element={<Green />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/purple" element={<Purple />} />
        <Route path="/brown" element={<Brown />} />
        <Route path="/pink" element={<Pink />} />
        <Route path="/gray" element={<Gray />} />
        <Route path="/black" element={<Black />} />
      </Routes>
    </footer>
  );
}
