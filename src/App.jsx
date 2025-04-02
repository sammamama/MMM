import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import BandPage from "./components/Bands/BandPage";

import { Navbar } from "./components/navbar";

export default function App() {
  return (
    <div className="mt-16">
      <BrowserRouter>
      <div className="w-screen fixed top-0 left-0 z-50">
        <Navbar className={"w-full"} />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bands" element={<BandPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
