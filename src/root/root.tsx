// Здесь необходимо продемонстрировать создание и использование GitHubStore
import GitHubStore from "../store/GitHubStore/GitHubStore";

const getOrgRepos = async (organizationName: string) => {
  const gitHubStore = new GitHubStore();

  return await gitHubStore.getOrganizationReposList({
    organizationName: organizationName,
  });
};

const getRepoBranches = async (nameRepo: string, nameOrg: string) => {
  const gitHubStore = new GitHubStore();

  return await gitHubStore.getReposBranches({
    nameOrg,
    nameRepo,
  });
};

export { getOrgRepos, getRepoBranches };
