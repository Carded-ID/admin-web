import React from "react";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.label}>Profile Picture</h2>
      <div className={styles.imageSelector}>
        <img src={"https://placekitten.com/300/300"} />
        <div className={styles.buttonContainer}>
          <label
            className={`${styles.fileInput} ${styles.button} ${styles.primary}`}
          >
            <input name="profilePicture" type={"file"} accept={"image/*"} />
            Upload Picture
          </label>
          <button className={`${styles.button}  ${styles.secondary}`}>
            Remove Picture
          </button>
        </div>
      </div>
      <h2 className={styles.label}>Name</h2>
      <input type={"text"} className={styles.textInput} name="profileName" />
      <h2 className={styles.label}>Bio</h2>
      <textarea className={styles.textInput} name="bio" />
    </div>
  );
};

export default Profile;
