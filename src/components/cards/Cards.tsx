import React from "react";
import styled from './cards.module.css'

const CardItem: React.FC = () => {
    return (
        <div className={`${styled.item} ${styled.content}`}>
            <div className={styled.content1}>
                <span className={styled.default__avatar}>K</span>
            </div>
            <div>
                <div className="content2">kts-school-frontend</div>
                <div className="content3">ktsstudio</div>
                <div className="content4">123</div>
                <div className="content5">Update 21 Jul</div>
            </div>
        </div>
    );
};

const Cards: React.FC = () => {
    return (
        <div className={styled.grid}>
            {[1, 2, 3, 4, 5, 6, 7].map(item => <CardItem key={item}/>)}
        </div>
    );
};

export default Cards;