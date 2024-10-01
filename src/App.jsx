import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SmashGame from "./SmashGame";
import OtpInput from "./OtpInput";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="game" element={<SmashGame data={"sdfdsf"} />} />
        <Route path="otp" element={<OtpInput />} />
      </Route>
    </Routes>
  );
}

export default App;
