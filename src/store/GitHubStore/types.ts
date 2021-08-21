/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */
import {ApiResponse} from "../../shared/store/types";

export type GetOrganizationReposListParams = {
    organizationName: string,
}

type listArray = {
    id: number,
    node_id: 'string',
    name: 'string',
    full_name: 'string',
    private: boolean,
}

type GetSomeDataParams = {
    name_org: 'string',
    data: listArray[],
}

export type RepoItem = {

}

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
}