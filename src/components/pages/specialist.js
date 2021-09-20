import React, {useState} from 'react'
import {Data} from '../carousel'
import Card from './carocard'
import './specialist.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"


function Specialist() {
    const [index, setIndex] = useState(0)
    const slideLeft = () => {
        if (index - 1 >= 0) {
          setIndex(index - 1);
        }
      };
    const slideRight = () => {
        if (index + 1 <= Data.length - 1) {
          setIndex(index + 1);
        }
      };
    

    
    return (
        <div className="container">
            <div className="card-container">
                <h2>Check out our specialists</h2>
                <FontAwesomeIcon
                    onClick={slideLeft}
                    className="leftBtn"
                    icon={faChevronLeft}
                />
                <FontAwesomeIcon
                    onClick={slideRight}
                    className="rightBtn"
                    icon={faChevronRight}
                />
                {Data.map((person, n) => {
                    let position = 
                      n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
                    return <Card key={n} {...person} cardStyle={position} />;
                })}
            </div>
        </div>
    )
}

export default Specialist
