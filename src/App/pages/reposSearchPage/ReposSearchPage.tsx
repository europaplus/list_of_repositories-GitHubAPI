import React, { useState, createContext } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import OutputReposList from "@components/OutputReposList";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import SearchIcon from "@components/SearchIcon";

import { RepoItem } from "../../../store/GitHubStore/types";
import styles from "./reposSearchPage.module.scss";
import useReposContext from "../../../shared/customHook";
import { Route, useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export const ReposContext = createContext({
  listRepositories: [] as RepoItem[],
  isLoading: false,
  getRepos: () => {},
});

const Provider = ReposContext.Provider;

const ReposSearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDrawer, setDrawer] = useState<boolean>(false);
  const { listRepositories, isLoading, getRepos } =
    useReposContext(searchValue);

  const handleOnClickCard = () => {
    setDrawer(true);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const history = useHistory();
  const handleOnClose = () => {
    history.push("/repos");
    setDrawer(false);
  };
  return (
    <Provider
      value={{
        listRepositories,
        isLoading,
        getRepos,
      }}
    >
      <InfiniteScroll
        next={getRepos}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        dataLength={2}
      >
        <div className={styles.search__form}>
          <Input
            name="search"
            onChange={handleOnChange}
            placeholder="Введите название организации"
          />
          <Button onClick={getRepos}>
            <SearchIcon />
          </Button>
        </div>
        <OutputReposList onClick={handleOnClickCard} />
        <Route
          path="/repos/:id"
          component={() => {
            return (
              <RepoBranchesDrawer isDrawer={isDrawer} onClose={handleOnClose} />
            );
          }}
        />
      </InfiniteScroll>
    </Provider>
  );
};

export default ReposSearchPage;
