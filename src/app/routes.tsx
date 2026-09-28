import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { GenerateInvite } from "./pages/GenerateInvite";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "convite", Component: GenerateInvite },
    ],
  },
]);
