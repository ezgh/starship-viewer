import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";

import Home from "./pages/Home";
import Starship from "./pages/Starship";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="starships/:id" element={<Starship />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
