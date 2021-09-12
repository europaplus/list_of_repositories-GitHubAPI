// Здесь необходимо продемонстрировать создание и использование GitHubStore
import GitHubStore from "../store/GitHubStore/GitHubStore";

const getOrgRepos = async (organizationName: string) => {
  const gitHubStore = new GitHubStore();

  return await gitHubStore.getOrganizationReposList({
    organizationName: organizationName,
  });
};

const getRepoBranches = async (id: string) => {
  const gitHubStore = new GitHubStore();

  return await gitHubStore.getReposBranches(id);
};

export { getOrgRepos, getRepoBranches };
