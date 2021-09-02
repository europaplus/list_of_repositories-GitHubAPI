import React, { FormEvent, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTitle";
import SearchIcon from "@components/SearchIcon";

import requestTesting from "../../../root/root";
import { RepoItem } from "../../../store/GitHubStore/types";
import styles from "./reposSearchPage.module.css";

const ReposSearchPage: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [listRepositories, setListRepositories] = useState<RepoItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnChange = (e: FormEvent) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };
  const handleOnCLick = () => {
    setLoading((prev) => !prev);
    requestTesting(searchValue).then((res) => {
      if (res.success) {
        setLoading((prev) => !prev);
        setListRepositories(res.data);
      } else {
        setLoading((prev) => !prev);
        setListRepositories([]);
      }
    });
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
      <RepoTile RepoItem={listRepositories} />
    </>
  );
};

export default ReposSearchPage;
