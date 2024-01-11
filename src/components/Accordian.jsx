import React from 'react';
import faqs from './data';
import {useState} from 'react';
function Accordian() {
    const [selected,useSelected] = useState(null);
    function singleClickHandler(getId){
     console.log(getId);   
    }
  return (
    <>
        <div>
            {
                faqs && faqs.length>0?
                faqs.map((qs)=>{
                    return(
                        <div>
                            <h3 onClick={()=>singleClickHandler(qs.id)}>{qs.question}</h3>
                            <h3>+</h3>
                        </div>
                    )
                })
                : 
                <div><h1>No data is present.</h1></div>
            }
        </div>
    </>
  )
}

export default Accordian