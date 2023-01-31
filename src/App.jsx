import React from "react";
import { Route, Routes } from "react-router-dom";
import GuestBookList from "./pages/GuestBookList";
import Login from "./pages/Login";
import Content from "./pages/Content";
import RegisterContent from "./pages/RegisterContent";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<GuestBookList />} />
      <Route path="/register" element={<RegisterContent />} />
      <Route path="/read" element={<Content />} />
    </Routes>
  );
};

export default App;