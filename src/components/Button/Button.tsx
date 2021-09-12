import React, { useContext } from "react";

import styles from "./button.module.scss";
import { ReposContext } from "../../App/pages/reposSearchPage";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const reposContext = useContext(ReposContext);

  return (
    <button
      onClick={onClick}
      disabled={reposContext.isLoading}
      className={styles.search__button}
    >
      {children}
    </button>
  );
};

export default Button;
