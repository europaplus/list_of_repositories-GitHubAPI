import { useState } from "react";
import { RepoItem } from "../../store/GitHubStore/types";
import { getOrgRepos } from "../../root/root";

const useReposContext = (searchValue: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [listRepositories, setListRepositories] = useState<RepoItem[]>([]);

  const getRepos = () => {
    getOrgRepos(searchValue).then((res) => {
      setLoading((prev) => !prev);
      if (res.success) {
        setListRepositories(res.data);
      } else {
        setListRepositories([]);
      }
    });
    setLoading((prev) => !prev);
  };

  return { listRepositories, isLoading, getRepos };
};

export default useReposContext;
