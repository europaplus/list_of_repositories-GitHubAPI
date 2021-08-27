import React from "react";
import styles from './card.module.css';

const Card: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__defaultAvatar}>
                <span className={styles.card__literal}>K</span>
            </div>
            <div>
                <div className={styles.card__reponame}>kts-school-frontend</div>
                <a href="#" className={styles.card__orgname}>ktsstudio</a>
                <div className={styles.card__info}>
                    <img className={styles.card__star} src='./images/star.png' alt='star'/>
                    <div>123</div>
                    <div className={styles.card__date}>Update 21 Jul</div>
                </div>
            </div>
        </div>
    );
};

export default Card;