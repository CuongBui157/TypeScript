import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeLayout, DetailLayout } from "./components/layout/userLayout";
import Home from "./pages/home";
import DetailPage from "./pages/detail_page";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ListProducts from "./pages/admin/list_product";
import AddProduct from "./pages/admin/add_product";
import EditProduct from "./pages/admin/edit_product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/detail" element={<DetailLayout />}>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>

        <Route path="/admin" element={<ListProducts />}></Route>
        <Route path="/admin/add" element={<AddProduct />}></Route>
        <Route path="/admin/edit/:id" element={<EditProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
