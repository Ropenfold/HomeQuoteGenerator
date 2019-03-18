import React from 'react';

const Quotebox = (props) => {

    return (
        <>
        <div className="quote">{props.quote}</div>
        <div className="author">{props.author}</div>

        </>
    )
}

export default Quotebox; 