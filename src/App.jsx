import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Content from "./pages/Content";
import GuestBookList from "./pages/GuestBookList";
import Login from "./pages/Login";
import RegisterContent from "./pages/RegisterContent";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/list" element={<GuestBookList />} />
        <Route path="/register" element={<RegisterContent />} />
        <Route path="/read" element={<Content />} />
      </Route>
    </Routes>
  );
};

export default App;
