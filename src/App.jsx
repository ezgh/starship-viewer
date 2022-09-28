import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Starship from "./pages/Starship";
import Search from "./pages/Search";

function App() {
  return (
    <main className="bg-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships/:id" element={<Starship />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
}

export default App;
