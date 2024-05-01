import React from 'react';

const InternetServiceCard = ({ planName, price, speed, features, buttonText }) => {
  return (
    <div className="col-sm-4 card">
        <div className="card-container">
            <div className="card-header">
                <p>{planName}</p>
                <h3>{price}</h3>
                <p>{speed}</p>
            </div>
            <div className="card-body">
                <ol>
                {features.map((feature, index) => (
                    <li key={index} style={{ textDecoration: feature.enabled ? 'none' : 'line-through', color: feature.enabled ? 'black' : 'gray' }}>{feature.text}</li>
                ))}
                </ol>
                <button className="btn btn-primary minwidth">{buttonText}</button>
            </div>
        </div>
    </div>
  );
};

export default InternetServiceCard;
