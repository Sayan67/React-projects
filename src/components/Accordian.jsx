import React from 'react';
import faqs from './data';
import { useState } from 'react';

const selectedArray = [
    'none',
    'none',
    'none',
    'none',
];
function Accordian() {
    const [selected, setSelected] = useState('none');
    const [questionId, setQuestionId] = useState([]);
    const [multiSelected, setMultiSelected] = useState(false);

    //Checking if the answer is already opened and toggles the state.
    function singleClickHandler(getId) {
        if (selected === getId) {
            setSelected('none');
        } else {
            setSelected(getId);
        }
    }

    //Multiple selected
    function multiClickHandler(getId) {
        let tempArr = [...questionId];
        if (tempArr.indexOf(getId) !== -1) {
            tempArr.splice(tempArr.indexOf(getId), 1);
            console.log(tempArr);
        } else {
            tempArr.push(getId);
            console.log(tempArr);
        }
        setQuestionId(tempArr);
    }

    return (
        <>

            <div className='Wrapper'>
                <h1>Accordian</h1>
                <button
                    onClick={() => setMultiSelected(!multiSelected)}
                >{multiSelected ? 'Enable Single select' : 'Enable Multi select'}</button>
                {
                    faqs && faqs.length > 0 ?
                        faqs.map((qs, ind) => {
                            return (
                                <div className='main-div'>
                                    <div className='sub-div'
                                        onClick={
                                            multiSelected ?
                                                () => multiClickHandler(qs.id)
                                                :
                                                () => singleClickHandler(qs.id)
                                        }
                                    >
                                        <h3 >{qs.question}</h3>
                                        {
                                            multiSelected ?
                                                questionId.indexOf(qs.id) !== -1 ? <h3>-</h3> : <h3>+</h3>
                                                :
                                                selected === qs.id ? <h3>-</h3> : <h3>+</h3>
                                        }

                                    </div>
                                    {
                                        multiSelected ?
                                            questionId.indexOf(qs.id) !== -1 ?
                                                <div className='ans-div'>
                                                    <h4>{qs.answer}</h4>
                                                </div>
                                                : null
                                            :
                                            selected === qs.id ?
                                                <div className='ans-div'>
                                                    <h4>{qs.answer}</h4>
                                                </div>
                                                : null}
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