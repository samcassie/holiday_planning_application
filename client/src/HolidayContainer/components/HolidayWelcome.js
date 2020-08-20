import React, { Component, Fragment } from 'react';
import { Icon } from 'rsuite';


class HolidayWelcome extends Component {
  render(){
    return (
        <div>
            <div className="holidayWelcome">
                <h2> Your holidays </h2>
            </div>

            <div className="homePara">
                <div className="homeParaPanel">
                    <Icon className="homeIcon" icon="suitcase" size="5x"/>
                    <p> Keep on top of your holidays by planning out all your trips and plans. Map out each destination for your travels and make sure everything goes to plan! </p>
                </div>

                <div className="homeParaPanel">
                    <Icon className="homeIcon" icon="map-marker" size="5x"/>
                    <p> Navigate your way through your profile, holidays and journal using the navigation bar on the left. </p>
                </div>
            </div>

            <div className="getGoingContainer">
                <p className="getGoing">Get going!</p>
            </div>
        </div>
    )
  }
}

export default HolidayWelcome;
