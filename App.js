import "./App.css";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (<div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

    <div className="container my-4">
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-4"><Filters/></div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-4"><Cards/></div>
          </div>
        </div>
      </div>
    </div>
    
    
    </div>
  );
}

export default App;


