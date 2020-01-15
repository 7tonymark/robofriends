import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib ct br3 pa3 ma2 grow bw2 shadow-5'>
        <img style={{width:250, height:170}} alt='robots' src={`https://robohash.org/${id}?100x100`}/>
            <div>
              <h2>{name}</h2>
              <p>{email}</p>  
            </div>
            </div>
    );
}

export default Card;