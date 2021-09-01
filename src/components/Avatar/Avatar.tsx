import React from "react";

import { RepoItem } from "../../store/GitHubStore/types";
import styles from "./avatar.module.css";

type AvatarProps = {
  repoItem: RepoItem;
  alt: string;
};

const Avatar: React.FC<AvatarProps> = ({ repoItem, alt }) => {
  return (
    <div>
      <img
        className={styles.card__avatar}
        src={repoItem.owner.avatar_url}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
