import React, { FormEvent, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import OutputReposList from "@components/OutputReposList";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import SearchIcon from "@components/SearchIcon";

import { getOrgRepos } from "../../../root/root";
import { RepoItem } from "../../../store/GitHubStore/types";
import styles from "./reposSearchPage.module.css";

const ReposSearchPage: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [listRepositories, setListRepositories] = useState<RepoItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDrawer, setDrawer] = useState<boolean>(false);
  const [idCard, setIdCard] = React.useState<number | null>(null);

  const handleOnClickCard = (item: RepoItem) => {
    setIdCard(item.id);
    setDrawer(true);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnCLick = () => {
    setLoading((prev) => !prev);
    getOrgRepos(searchValue).then((res) => {
      setLoading((prev) => !prev);
      if (res.success) {
        setListRepositories(res.data);
      } else {
        setListRepositories([]);
      }
    });
  };
  const searchRepo = () => {
    const repo = listRepositories.find((repo) => repo.id === idCard);
    return repo ? repo : listRepositories[0];
  };
  const handleOnClose = async () => {
    await setDrawer(false);
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
          <SearchIcon />
        </Button>
      </div>
      <OutputReposList list={listRepositories} onClick={handleOnClickCard} />
      <RepoBranchesDrawer
        selectedRepo={searchRepo()}
        isDrawer={isDrawer}
        onClose={handleOnClose}
      />
    </>
  );
};

export default ReposSearchPage;
