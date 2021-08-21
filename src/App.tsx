import './App.css';
import React from "react";
import SearchBar from "./components/searchBar";
import Cards from "./components/cards";


const App: React.FC = () => {
    return (
        <>
            <SearchBar/>
            <Cards/>
        </>
    )
}

export default App;
