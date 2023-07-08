import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css';

const Card = ({cardTitle, cardText, cardLink, imageLink}) => {
  return (
      <figure  className="snip1200 " style={{width: "100%", height: "100%"}}>
        <img data-testid="card-image" style={{objectFit: "cover", width: "100%",height: "100%"}}  src={imageLink} alt="sq-sample27" />
        <figcaption>
          <p data-testid="card-text">{cardText}</p>
          <div className="heading">
            <h2><span data-testid="card-title"> {cardTitle}</span></h2>
          </div>
        </figcaption>
        <a data-testid="card-link" className = "d-inline" href={cardLink}></a>
      </figure>
  );
}

export default Card;
