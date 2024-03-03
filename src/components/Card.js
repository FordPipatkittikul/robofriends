import React from 'react';
// pure function
const Card = ({name,email,id}) => {
    return(
        <div className='bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt = "robots"src = {`https://robohash.org/${id}?size=200x200`} />
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;