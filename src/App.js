import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./progress-bar.component";

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
   if(completed >= 100){
    setCompleted(100)
   }
  }, [completed]);

  return (
    <div className="App">
      <input style={{marginTop:'20px', width:'30%',borderRadius:"5px",border:'1px solid gray',padding:'15px'}} type="number" max={100} min={0} value={completed} onChange={(e) => setCompleted(e.target.value)} />
      <ProgressBar bgcolor={"rgb(213 28 194 / 98%)"} completed={completed} />
    </div>
  );
}

export default App;
