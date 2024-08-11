import "./App.scss";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const { mode } = useSelector((state) => state.mode);
  const bg = mode === "light" ? "white" : "rgb(46, 46, 64)";
  return (
    <div className="app" style={{ backgroundColor: bg }}>
      <Dashboard />
    </div>
  );
}
export default App;
