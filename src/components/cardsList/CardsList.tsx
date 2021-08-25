import React from "react";
import styles from './cardsList.module.css';
import Card from './card'

const CardsList: React.FC = () => {
    return (
        <div className={styles.cards__item}>
            {[1, 2, 3, 4, 5, 6, 7].map(item => <Card key={item}/>)}
        </div>
    );
};

export default CardsList;