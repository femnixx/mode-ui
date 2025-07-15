import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SecondPage from "./pages/SecondPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
