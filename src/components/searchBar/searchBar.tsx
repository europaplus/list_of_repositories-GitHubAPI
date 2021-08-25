import React, {FormEvent} from "react";
import search from './search.svg';
import styles from './searchBar.module.css'
import requestTesting from "../../root/root";

const SearchBar: React.FC = () => {
    function clickHandle(e: FormEvent): void {
        e.preventDefault();
        requestTesting()
            .then(res => console.log(res));
    }

    return (
        <div className={styles.search}>
            <form action="" className={styles.search__form}>
                <input className={styles.search__input} type="search" placeholder="Введите название организации"/>
                <button className={styles.search__button} onClick={clickHandle} type="submit">
                    <img className={styles.search__magnifier} src={search} alt="icon search"/>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;