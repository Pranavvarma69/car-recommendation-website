// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CarList from "./components/carList";

function App() {
  // Filter states (will be controlled in Home.jsx)
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <Router>
      <Routes>
        {/* Home page with filters */}
        <Route
          path="/"
          element={
            <Home
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          }
        />

        {/* Car list page (if you want it separate) */}
        <Route
          path="/cars"
          element={
            <CarList
              selectedBrand={selectedBrand}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;