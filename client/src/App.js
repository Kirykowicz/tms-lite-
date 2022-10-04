import NavBar from "./components/Navbar";
import LoadBoard from "./components/LoadBoard";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LoadBoard />} />
      </Routes>
      <Routes>
        <Route exact path="/customers" element={<Customers />} />
      </Routes>
    </>
  );
}

export default App;
