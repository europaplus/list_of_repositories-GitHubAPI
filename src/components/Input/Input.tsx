import React from "react";

import styles from "./input.module.scss";

export type InputProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} className={styles.search__input} />;
};

export default React.memo(Input);
