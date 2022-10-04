import NavBar from "./components/Navbar";
import LoadBoard from "./components/LoadBoard";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Carriers from "./components/Carriers";
import NewLoad from "./components/NewLoad";

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
      <Routes>
        <Route path="/new_load" element={<NewLoad />} />
      </Routes>
    </>
  );
}

export default App;
