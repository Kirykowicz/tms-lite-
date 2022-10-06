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
  const [loadToView, setLoadLoadToView] = useState({});
  const [customers, setCustomers] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("/customers")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
      });
    fetch("/carriers")
      .then((res) => res.json())
      .then((res) => {
        setCarriers(res);
      });
    fetch("/sites")
      .then((res) => res.json())
      .then((res) => {
        setSites(res);
      });
  }, []);

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
    return <IndividualLoad setViewLoad={setViewLoad} load={loadToView} />;
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
              load={loadToView}
              setLoad={setLoadLoadToView}
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
        <Route
          path="/new_load"
          element={
            <NewLoad customers={customers} carriers={carriers} sites={sites} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
