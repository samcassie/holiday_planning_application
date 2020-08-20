import React, { Component, Fragment } from 'react';
import { Icon } from 'rsuite';


class JournalWelcome extends Component {
  render(){
    return (
        <div>
            <div className="journalWelcome">
                <h2> Journal </h2>
            </div>

            <div className="homePara">
                <div className="homeParaPanel">
                    <Icon className="homeIcon" icon="check" size="5x"/>
                    <p> Publish holidays from the past with your own personal review. Let the world share your experience!</p>
                </div>

                <div className="homeParaPanel">
                    <Icon className="homeIcon" icon="search-peoples" size="5x"/>
                    <p> Have a look at where your friends have been travelling! Comment what you think of their travels. </p>
                </div>
            </div>

        </div>
    )
  }
}

export default JournalWelcome;
