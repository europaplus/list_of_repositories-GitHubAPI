import React from "react";

import { RepoItem } from "../../store/GitHubStore/types";
import Card from "./card";
import styles from "./RepoTile.module.css";

export type RepoTileProps = {
  RepoItem: RepoItem[];
  onClick: (item: RepoItem) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({ RepoItem, onClick }) => {
  return (
    <div className={styles.cards__item}>
      {RepoItem.map((item) => {
        return (
          <Card key={item.id} repoItem={item} onClick={() => onClick(item)} />
        );
      })}
    </div>
  );
};

export default RepoTile;
