import React from "react";
import styles from "./Header.module.css";
import DomainSelector from "./DomainSelector";
import { FaCog } from "react-icons/fa";
import IconButton from "../IconButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Carded.ID</h2>
      <DomainSelector />
      <nav />
      <IconButton
        Icon={FaCog}
        onClick={() => {
          console.log("settings clicked");
        }}
      />
    </header>
  );
};

export default Header;
