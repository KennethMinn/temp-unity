import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SmashGame from "./SmashGame";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="game" element={<SmashGame />} />
      </Route>
    </Routes>
  );
}

export default App;
