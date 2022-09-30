import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <main
      className="bg-zinc-800"
      style={{
        backgroundImage: "url(/images/stardust.png)",
      }}
    >
      <span className="sticky top-0 z-50">
        <Navbar />
      </span>
      <Outlet />
    </main>
  );
};

export default MainLayout;
