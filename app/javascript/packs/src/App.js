import React from "react";
import { useRoutes } from "hookrouter";
import Home from "./components/Home";

const routes = {
  "/": () => <Home />,
  "/about": () => <Home />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult;
};

export default App;
