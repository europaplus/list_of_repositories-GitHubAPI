import React, { FormEvent } from "react";

import { RepoItem } from "../../store/GitHubStore/types";
import Card from "./card";
import styles from "./RepoTile.module.css";

export type RepoTileProps = {
  RepoItem: RepoItem[];
};

const RepoTile: React.FC<RepoTileProps> = ({ RepoItem }) => {
  const [indexCard, setIndexCard] = React.useState<RepoItem | null>(null);

  return (
    <div className={styles.cards__item}>
      {RepoItem.map((item) => {
        const handleOnClickCard = () => {
          setIndexCard(item);
        };
        return (
          <Card key={item.id} repoItem={item} onClick={handleOnClickCard} />
        );
      })}
    </div>
  );
};

export default RepoTile;
