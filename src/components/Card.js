import React from 'react';
import './Card.css';

function Card({number,faceup,onClick}) {
    const handleClick=() => {
        onClick();
    }
    return (
        <div className="card">
        <button onClick={handleClick}>
        {faceup?(<img src={`images/${number}.png`} alt="card detail" />):(<img src={`images/gray_back.png`} alt="back"/>)}
        </button>
            
        </div>
    )
}

export default Card;
