import "./App.css";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDescScreen from "./screens/ProductDescScreen";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/product/:id" element={<ProductDescScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
