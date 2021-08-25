// Здесь необходимо продемонстрировать создание и использование GitHubStore
import GitHubStore from '../store/GitHubStore/GitHubStore';

const requestTesting = async () => {
    const gitHubStore = new GitHubStore();
    const EXAMPLE_ORGANIZATION = 'ktsstudio';

    return await gitHubStore.getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION
    });
}

export default requestTesting;
// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log