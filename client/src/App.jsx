import { useState } from "react";
import "./App.css";
import Groups from "./components/Groups";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Groups></Groups>
    </div>
  );
}

export default App;
