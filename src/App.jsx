import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Creat from "./pages/Creat";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2"> Home</Link>
        <Link to="/creat" className="btn btn-success"> Creat</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creat" element={<Creat />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;