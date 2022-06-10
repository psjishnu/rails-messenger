import React from "react";
import { useRoutes } from "hookrouter";
import Home from "./components/Home";
import Login from "./components/Login";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar";
import "./styles.css";

const routes = {
  "/": () => <Home />,
  "/login": () => <Login />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <>
      <Navbar />
      <div className="ui container">{routeResult}</div>
    </>
  );
};

export default App;
