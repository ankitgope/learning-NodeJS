import React from "react";
import Background from "./compnents/Background";
import Foreground from "./compnents/Foreground";
function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
      

    </div>
  );
}

export default App;
