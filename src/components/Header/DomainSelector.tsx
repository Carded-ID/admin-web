import React from "react";
import styles from "./DomainSelector.module.css";

const DomainSelector = () => {
  return (
    <div className={styles.container}>
      <select className={styles.selector}>
        <option className={styles.option} value="willma.carded.id">
          willma.carded.id
        </option>
      </select>
    </div>
  );
};

export default DomainSelector;
