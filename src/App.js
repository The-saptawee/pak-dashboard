import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import User from "./Components/Users/User";
import CreateUser from "./Components/Users/CreateUser";
import UpdateUser from "./Components/Users/UpdateUser";
import Hrs from "./Components/Hrs/Hrs";
import CreateHrs from "./Components/Hrs/CreateHrs";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/update/:id" element={<UpdateUser />} />
        <Route path="/hrs" element={<Hrs />} />
        <Route path="/hrs/create" element={<CreateHrs />} />
      </Routes>
    </BrowserRouter>
  );
}
