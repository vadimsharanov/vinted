import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./dist/routes";
import TopBar from "./dist/shared/topBar/topBar";

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <AllRoutes></AllRoutes>
    </Router>
  );
}

export default App;
