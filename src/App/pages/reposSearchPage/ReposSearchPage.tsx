import React, { FormEvent, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import RepoTile from "@components/RepoTitle";
import SearchIcon from "@components/SearchIcon";

import { getOrgRepos } from "../../../root/root";
import { RepoItem } from "../../../store/GitHubStore/types";
import styles from "./reposSearchPage.module.css";

const ReposSearchPage: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [listRepositories, setListRepositories] = useState<RepoItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDrawer, setDrawer] = useState<boolean>(false);
  const [indexCard, setIndexCard] = React.useState<RepoItem | null>(null);

  const handleOnClickCard = (item: RepoItem) => {
    setIndexCard(item);
    setDrawer(true);
  };

  const handleOnChange = (e: FormEvent) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  const handleOnCLick = () => {
    setLoading((prev) => !prev);
    getOrgRepos(searchValue).then((res) => {
      if (res.success) {
        setLoading((prev) => !prev);
        setListRepositories(res.data);
      } else {
        setLoading((prev) => !prev);
        setListRepositories([]);
      }
    });
  };
  const handleOnClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <div className={styles.search__form}>
        <Input
          name="search"
          onChange={handleOnChange}
          placeholder="Введите название организации"
        />
        <Button onClick={handleOnCLick} disabled={isLoading}>
          <SearchIcon currentColor="white" />
        </Button>
      </div>
      <RepoTile RepoItem={listRepositories} onClick={handleOnClickCard} />
      <RepoBranchesDrawer
        selectedRepo={indexCard}
        isDrawer={isDrawer}
        onClose={handleOnClose}
      />
    </>
  );
};

export default ReposSearchPage;
