import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";

import { RepoItem } from "../../../store/GitHubStore/types";
import styles from "./card.module.scss";

type CardProps = {
  repoItem: RepoItem;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ repoItem, onClick }) => {
  const truncString = (str: string) => {
    if (str.length > 30) {
      return str.substring(0, 27) + "...";
    } else {
      return str;
    }
  };

  const date = new Date(repoItem.updated_at);

  return (
    <div className={styles.card} onClick={onClick}>
      <Avatar
        repoItem={repoItem}
        alt="avatar"
        src={repoItem.owner.avatar_url}
        letter={repoItem.name.charAt(0).toUpperCase()}
      />
      <div>
        <div className={styles.card__reponame}>
          {truncString(repoItem.full_name)}
        </div>
        <div className={styles.card__orgname}>
          {truncString(repoItem.owner.login)}
        </div>
        <div className={styles.card__info}>
          <StarIcon />
          <div>{repoItem.stargazers_count}</div>
          <div className={styles.card__date}>
            Update{" "}
            {`${date.getDate()} ${date.toLocaleString("default", {
              month: "long",
            })}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
