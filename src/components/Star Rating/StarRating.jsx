import { React, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css';


function StarRating({ stars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function clickHandler(currentIndex) {
        setRating(currentIndex);
    }
    function mouseEnterHandler(currentIndex) {

        setHover(currentIndex);
    }

    function mouseLeaveHandler() {
        setHover(rating);
    }
    
    function buttonClickHandler(val) {
        setRating(0);
        
    };
    
    


    return (
        <div className='Outer'>
            <h1>Star Rating</h1>
            <div className='inner'>
                {
                    [...Array(stars)].map((_, index) => {
                        index += 1;
                        return (

                            <FaStar
                                key={index}
                                className={
                                    index <= (hover || rating) ? 'A' : 'B'}
                                onClick={() => clickHandler(index)}
                                onMouseMove={() => mouseEnterHandler(index)}
                                onMouseLeave={() => mouseLeaveHandler()}
                            ></FaStar>

                        )
                    })
                }
            </div>
            <button
                className='btn'
                onClick={()=>buttonClickHandler(0)}
            >Reset</button>
        </div>
    )
}

export default StarRating