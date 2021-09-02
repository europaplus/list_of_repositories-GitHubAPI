import React from "react";

import { RepoItem } from "../../store/GitHubStore/types";
import styles from "./avatar.module.css";

type AvatarProps = {
  repoItem: RepoItem;
  alt: string;
  src?: string;
  letter: string;
};

const Avatar: React.FC<AvatarProps> = ({ repoItem, alt, src, letter }) => {
  return (
    <div>
      <img className={styles.card__avatar} src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
