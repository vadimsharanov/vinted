import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./dist/shared/topBar.jsx";
import AllRoutes from "./dist/routes";

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <AllRoutes></AllRoutes>
    </Router>
  );
}

export default App;
