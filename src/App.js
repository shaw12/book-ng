import React,{ useState } from "react";
import './App.css';
import Reservation from "./components/Reservation";

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className="App">

      {/* <Todo /> */}
      <Reservation />
      
    </div>

  );
}

export default App;
