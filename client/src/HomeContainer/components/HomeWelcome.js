import React from 'react';

const HomeWelcome = ({selectedTraveller}) => {

    return(
        <div className="homeWelcome">
            <h2> Welcome, {selectedTraveller.name}. </h2>
        </div>
    )

}

export default HomeWelcome;
