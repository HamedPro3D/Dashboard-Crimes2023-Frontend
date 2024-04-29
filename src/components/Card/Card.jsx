import React from 'react';
import './Card.css';

const Card = ({ header = '', description = '', children }) => {
    return (
        
        <div className="card-container">
            {header && <h1>{header}</h1>}
            {description && <p>{description}</p>}
            <div className="card">
                {children}
            </div>
        </div>
    );
};

export default Card;
