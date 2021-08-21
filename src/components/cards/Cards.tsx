import React from "react";
import styled from './cards.module.css';

const CardItem: React.FC = () => {
    return (
        <div className={styled.item}>
            <div className={styled.item__defaultAvatar}>
                <span className={styled.literal}>K</span>
            </div>
            <div>
                <div className={styled.repo__name}>kts-school-frontend</div>
                <a href="#" className={styled.org__name}>ktsstudio</a>
                <div className={styled.repo__info}>
                    <img className={styled.star} src='./images/star.png' alt='star'/>
                    <div className={styled.star__count}>123</div>
                    <div className={styled.date}>Update 21 Jul</div>
                </div>
            </div>
        </div>
    );
};

const Cards: React.FC = () => {
    return (
        <div className={styled.grid__item}>
            {[1, 2, 3, 4, 5, 6, 7].map(item => <CardItem key={item}/>)}
        </div>
    );
};

export default Cards;