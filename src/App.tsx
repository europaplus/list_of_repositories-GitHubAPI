import './App.css';
import React from "react";
import SearchBar from "./components/searchBar";
import CardsList from "./components/cardsList";


const App: React.FC = () => {
    return (
        <>
            <SearchBar/>
            <CardsList/>
        </>
    )
}

export default App;
