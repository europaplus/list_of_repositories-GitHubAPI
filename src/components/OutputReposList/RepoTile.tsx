import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { RepoItem } from "../../store/GitHubStore/types";
import Card from "./card";
import styles from "./RepoTile.module.scss";
import { ReposContext } from "../../App/pages/reposSearchPage";

export type OutputReposListProps = {
  onClick: (item: RepoItem) => void;
};

const OutputReposList: React.FC<OutputReposListProps> = ({ onClick }) => {
  const reposContext = useContext(ReposContext);
  return (
    <div className={styles.cards__item}>
      {reposContext.listRepositories.map((item) => {
        return (
          <Link to={`/repos/${item.id}`} key={item.id}>
            <Card repoItem={item} onClick={() => onClick(item)} />
          </Link>
        );
      })}
    </div>
  );
};

export default React.memo(OutputReposList);
