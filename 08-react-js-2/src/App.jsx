import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Lubna Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Beranda
              </Link>
              <Link className="nav-link" to="/cart">
                Keranjang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <h1>.</h1>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
