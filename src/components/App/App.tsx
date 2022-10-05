import { Route, Routes } from "react-router-dom";

import Dashboard from "../Helpers/Dashboard";
import UsersInfo from "../Users/UsersInfo";
import UsersPage from "../Users/UsersPage";
import Login from "../Helpers/Login";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user/:name" element={<UsersInfo />} />
    </Routes>
  );
}

export default App;
