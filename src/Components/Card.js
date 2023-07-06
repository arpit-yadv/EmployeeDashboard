import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css';

const Card = ({cardTitle, cardText, cardLink, imageLink}) => {
  return (
      <figure className="snip1200 ">
        <img src={imageLink} alt="sq-sample27" />
        <figcaption>
          <p>{cardText}</p>
          <div className="heading">
            <h2><span> {cardTitle}</span></h2>
          </div>
        </figcaption>
        <a className = "d-inline" href={cardLink}></a>
      </figure>
  );
}

export default Card;
