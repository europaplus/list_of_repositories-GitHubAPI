import React from "react";
import search from './search.svg';
import styled from './searchBar.module.css'

const SearchBar: React.FC = () => {
    return (
        <div className={styled.grid}>
            <form action="" className={styled.search}>
                <input type="search" placeholder="Введите название организации"/>
                    <button type="submit">
                        <img className="is" src={search} alt="icon search"/>
                    </button>
            </form>
        </div>
    );
};

export default SearchBar;