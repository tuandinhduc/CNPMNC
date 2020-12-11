import React from "react";
import { ProvideAuth } from "./hooks/use-auth.js";
import Router from "./router.jsx";
import "antd/dist/antd.css";

const App = () => {
  return (
    <ProvideAuth>
      <Router></Router>
    </ProvideAuth>
  );
};

export default App;
