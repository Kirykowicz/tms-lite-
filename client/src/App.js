import NavBar from "./components/Navbar";
import LoadBoard from "./components/LoadBoard";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Carriers from "./components/Carriers";

function App() {
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
    </>
  );
}

export default App;
