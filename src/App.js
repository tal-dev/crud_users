import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home"
import Navigation from "./navigation"
import AddNewUser from "./addUser"
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addNewUser" element={<AddNewUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
