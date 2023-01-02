import React, { useEffect } from "react";
import { Outlet, useMatch, useNavigate } from "react-router";
import Header from "./Header/Header";

import styles from "../styles/AdminLayout.module.css";

const AdminLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
