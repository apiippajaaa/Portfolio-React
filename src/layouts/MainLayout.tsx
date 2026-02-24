import { Outlet } from "react-router";
import Hamburger from "../components/ui/Hamburger";
import "../css/Background.css";
import Background from "../components/ui/background/Background";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen  overflow-hidden">
      <Hamburger />
      <Background />
      <Outlet />
    </div>
  );
}
