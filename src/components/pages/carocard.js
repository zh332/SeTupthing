import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({ name, img, cardStyle }) => {

    return (

      <div className="card_container">
        <article className={cardStyle}>
          <Link className={`card ${cardStyle}`} to='/catalogue'>
          <figure className="card-wrap">
          <img src={img} alt={name} className="card-img" />
          </figure>
        
          <div >
            <h5 >{name}</h5>
          </div>
          </Link>
      </article>
    </div>
    );
  };
  
  export default Card;


