import React, {FormEvent} from "react";
import search from './search.svg';
import styled from './searchBar.module.css'
import requestTesting from "../../root/root";

const SearchBar: React.FC = () => {
    function clickHandle(e: FormEvent): void {
        e.preventDefault();
        requestTesting();
    }

    return (
        <div className={styled.grid}>
            <form action="" className={styled.search}>
                <input className={styled.inp} type="search" placeholder="Введите название организации"/>
                <button onClick={clickHandle} type="submit">
                    <img className="is" src={search} alt="icon search"/>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;