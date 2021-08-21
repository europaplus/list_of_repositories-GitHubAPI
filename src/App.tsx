import './App.css';
import React from "react";
import SearchBar from "./components/searchBar";
import ApiStore from "./shared/store";
import {HTTPMethod, StatusHTTP} from './shared/store/types';

const App: React.FC = () => {
    const getGitHubUsers = new ApiStore();
    console.log(StatusHTTP.OK)
    getGitHubUsers.request<string>({
        method: HTTPMethod.GET,
        endpoint: '/search/users?q=w',
        headers: {
            Accept: "application/vnd.github.v3+json"
        },
        data: 'undefined',
    });
    return (
        <SearchBar/>
    )
}

export default App;
