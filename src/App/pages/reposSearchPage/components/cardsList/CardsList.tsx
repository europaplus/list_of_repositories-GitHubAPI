import React from "react";

import { RepoItem } from "../../../../../store/GitHubStore/types";
import Card from "./card";
import styles from "./cardsList.module.css";

export type CardsListProps = {
  listRepositories: RepoItem[];
};

const CardsList: React.FC<CardsListProps> = ({ listRepositories }) => {
  return (
    <div className={styles.cards__item}>
      {listRepositories.map((item) => {
        return <Card key={item.id} repoItem={item} />;
      })}
    </div>
  );
};

export default CardsList;
