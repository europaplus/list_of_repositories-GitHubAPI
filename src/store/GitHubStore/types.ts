/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 */
import { ApiResponse } from "../../shared/store/types";

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export type gitHubRepoOwner = {
  id: number;
  url: string;
  avatar_url: string;
  login: string;
};

export type RepoItem = {
  id: number;
  full_name: string;
  owner: gitHubRepoOwner;
  stargazers_count: number;
  updated_at: string;
  name: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;
}
