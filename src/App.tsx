import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
    <Clock />
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
    <List1 props={[1,2,3]} />
    <List2 props={[4,5]} />
    </div>
   
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
