import React, { FormEvent } from "react";

import styles from "./input.module.css";

export type InputProps = {
  name: string;
  onChange: (e: FormEvent) => void;
  placeholder: string;
};

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} className={styles.search__input} />;
};

export default Input;
