import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import DesignLayout from "./components/Design/DesignLayout";
import Links from "./components/Design/Links";
import Profile from "./components/Design/Profile";

const Router = () => {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="design" element={<DesignLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="links" element={<Links />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
