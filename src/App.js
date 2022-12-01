import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./Components/Users/User";
import CreateUser from "./Components/Users/CreateUser";
import UpdateUser from "./Components/Users/UpdateUser";
import Hrs from "./Components/Hrs/Hrs";
import CreateHrs from "./Components/Hrs/CreateHrs";
import UpdateHrs from "./Components/Hrs/UpdateHrs";
import Shipping from "./Components/Shiping/Shipping";
import CreateShipping from "./Components/Shiping/CreateShipping";
import UpdateShipping from "./Components/Shiping/UpdateShipping";
import Vonder from "./Components/Vendor/Vendor";
import CreateVonders from "./Components/Vendor/CreateVonders";
import UpdateVonders from "./Components/Vendor/UpdateVonders";
import Material from "./Components/Materials/Materials";
import CreateMaterials from "./Components/Materials/CreateMaterials";
import UpdateMaterials from "./Components/Materials/UpdateMeterials";
import Factories from "./Components/Factories/Factories";
import CreateFactories from "./Components/Factories/CreateFactories";
import UpdateFactories from "./Components/Factories/UpdateFactories";
import Orders from "./Components/Orders/Order";
import PageNotFound from "./Components/PageNotFound";
import CreateOrders from "./Components/Orders/CreateOrders";
import UpdateOrders from "./Components/Orders/UpdateOrders";

import Home from "./Components/Home/Home";

import Logout from "./Components/Alltokenpages/Logout";
import SignIn from "./Components/Alltokenpages/Loginpages";
import Sidebar from "./Components/Sidebar";

export default function App() {
  const token = localStorage.getItem("Token");
  // const [status, setStatus] = useState(0);

  if (!token) {
    return (
      <>
        <SignIn />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        {/* <Route path="/login" element={<SignIn />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/update/:id" element={<UpdateUser />} />
        <Route path="/hrs" element={<Hrs />} />
        <Route path="/hrs/create" element={<CreateHrs />} />
        <Route path="/hrs/update/:id" element={<UpdateHrs />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/shipping/create" element={<CreateShipping />} />
        <Route path="/shipping/update/:id" element={<UpdateShipping />} />
        <Route path="/vonder" element={<Vonder />} />
        <Route path="/vonder/create" element={<CreateVonders />} />
        <Route path="/vonder/update/:id" element={<UpdateVonders />} />
        <Route path="/material" element={<Material />} />
        <Route path="/material/create" element={<CreateMaterials />} />
        <Route path="/material/update/:id" element={<UpdateMaterials />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/factories/create" element={<CreateFactories />} />
        <Route path="/factories/update/:id" element={<UpdateFactories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/create" element={<CreateOrders />} />
        <Route path="/orders/update/:id" element={<UpdateOrders />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
