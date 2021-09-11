import React, { FormEvent } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.search__button}
    >
      {children}
    </button>
  );
};

export default Button;
