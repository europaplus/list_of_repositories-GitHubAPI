import ApiStore from "../../shared/store/ApiStore";
import { ApiResponse, HTTPMethod } from "../../shared/store/types";
import {
  GetOrganizationReposListParams,
  RepoItem,
  IGitHubStore,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("https://api.github.com/"); // TODO: не забудьте передать baseUrl в конструктор
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>> {
    return this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `orgs/${params.organizationName}/repos`,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      data: {},
    });
  }
  getReposBranches(id: string): Promise<ApiResponse<RepoItem[], any>> {
    return this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `repositories/${id}/branches`,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      data: {},
    });
  }
}
