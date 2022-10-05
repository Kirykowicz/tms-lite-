import NavBar from "./components/Navbar";
import LoadBoard from "./components/LoadBoard";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Carriers from "./components/Carriers";
import NewLoad from "./components/NewLoad";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LoadBoard />} />
      </Routes>
      <Routes>
        <Route path="/customers" element={<Customers />} />
      </Routes>
      <Routes>
        <Route path="/carriers" element={<Carriers />} />
      </Routes>
      <Routes>
        <Route path="/new_load" element={<NewLoad />} />
      </Routes>
      <Login />
    </>
  );
}

export default App;
