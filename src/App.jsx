import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2"> Home</Link>
        <Link to="/create" className="btn btn-success"> Create</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;