import NavBar from "./components/Navbar";
import LoadBoard from "./components/LoadBoard";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Carriers from "./components/Carriers";
import NewLoad from "./components/NewLoad";
import { useState, useEffect } from "react";
import Login from "./Login";
import IndividualLoad from "./components/IndividualLoad";

function App() {
  const [user, setUser] = useState(null);
  const [viewLoad, setViewLoad] = useState(false);
  const [loadNumber, setLoadNumber] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;
  if (viewLoad)
    return <IndividualLoad setViewLoad={setViewLoad} loadNumber={loadNumber} />;
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LoadBoard
              setViewLoad={setViewLoad}
              setLoadNumber={setLoadNumber}
            />
          }
        />
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
