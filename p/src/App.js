import { Route, Routes } from "react-router";
import "./App.css";
import Navb from "./Components/Navb";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Hello there !!</h1>
      <Navb />
      <Routes>
        <Route exact path="/{p}" />
      </Routes>
    </div>
  );
}

export default App;
