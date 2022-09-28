import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Starship from "./pages/Starship";

function App() {
  return (
    <main className="bg-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships/:id" element={<Starship />} />
      </Routes>
    </main>
  );
}

export default App;
