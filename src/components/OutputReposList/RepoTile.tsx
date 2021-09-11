import React from "react";

import { RepoItem } from "../../store/GitHubStore/types";
import Card from "./card";
import styles from "./RepoTile.module.css";

export type OutputReposListProps = {
  list: RepoItem[];
  onClick: (item: RepoItem) => void;
};

const OutputReposList: React.FC<OutputReposListProps> = ({ list, onClick }) => {
  return (
    <div className={styles.cards__item}>
      {list.map((item) => {
        return (
          <Card key={item.id} repoItem={item} onClick={() => onClick(item)} />
        );
      })}
    </div>
  );
};

export default React.memo(OutputReposList);
