import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";

import { RepoItem } from "../../../../../../store/GitHubStore/types";
import styles from "./card.module.css";

type CardProps = {
  repoItem: RepoItem;
};

const Card: React.FC<CardProps> = ({ repoItem }) => {
  const truncString = (str: string) => {
    if (str.length > 30) {
      return str.substring(0, 27) + "...";
    } else {
      return str;
    }
  };

  const getDate = (updateAt: string) => {
    const date = new Date(updateAt);
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "long",
    })}`;
  };

  return (
    <div className={styles.card}>
      <Avatar repoItem={repoItem} alt="avatar" />
      <div>
        <div className={styles.card__reponame}>
          {truncString(repoItem.full_name)}
        </div>
        <a href="#" className={styles.card__orgname}>
          {truncString(repoItem.owner.login)}
        </a>
        <div className={styles.card__info}>
          <StarIcon currentColor="#FF9432" />
          <div>{repoItem.stargazers_count}</div>
          <div className={styles.card__date}>
            Update {getDate(repoItem.updated_at)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
