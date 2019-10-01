import React from 'react';

const Result = (props) => {
    return (
        <div className="result">
            Wynik poszukiwanego miasta!
            {props.out}
        </div>
    );
};

export default Result;