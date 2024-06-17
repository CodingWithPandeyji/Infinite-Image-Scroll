import React from "react";
import Gallery from "./components/Gallery";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center text-[30px] font-bold	">Infinite Scrolling Gallery</h1>
      <Gallery />
    </div>
  );
};

export default App;