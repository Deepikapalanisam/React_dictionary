import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dictionary from "./components/Dictionary";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "false"
  );

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  isLoggedIn ? <Navigate to="/dictionary" /> : <Login setIsLoggedIn={setIsLoggedIn} />
                }
              />
              <Route
                path="/dictionary"
                element={
                  isLoggedIn ? <Dictionary defaultKeyword="aesthetic" /> : <Navigate to="/" />
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
