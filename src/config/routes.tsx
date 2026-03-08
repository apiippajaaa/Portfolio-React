import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Projects from "../pages/projects/Projects";
import About from "../pages/About";
import GetInTouch from "../pages/GetInTouch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "get-in-touch", element: <GetInTouch /> },
    ],
  },
]);
