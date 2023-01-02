import React, { FC } from "react";
import { IconType } from "react-icons";

import styles from "../styles/IconButton.module.css";

interface IconButtonProps {
  Icon: IconType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: FC<IconButtonProps> = ({ Icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Icon className={styles.icon} size="30px" />
    </button>
  );
};

export default IconButton;
