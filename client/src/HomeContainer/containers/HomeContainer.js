import React, { Component } from 'react';
import HomeWelcome from '../components/HomeWelcome.js';
import Request from '../../helpers/request';
import { Icon } from 'rsuite';
import HomeNavBar from '../components/HomeNavBar.js';


class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            holidays: []
        }
    }

    componentDidMount(){
        const request = new Request();

        let url = 'api/holidays?travellerId=' + this.props.selectedTraveller.id
        request.get(url)
        .then((data) => {
            this.setState({holidays: data})
        })
    }

    render(){


        if (this.props.selectedTraveller === ""){
            return null
        } else {
            let total_published = 0;
            for (let holiday of this.state.holidays){
                if (holiday.published === true){
                    total_published += 1
                }
            }

            return(
              <div className="extended-container">
              <HomeNavBar selectedTraveller={this.props.selectedTraveller} logOut={this.props.logOut} />
                <div className="container">

                <HomeWelcome selectedTraveller={this.props.selectedTraveller}/>

                    <div className="homePara">
                        <div className="homeParaPanel">
                            <Icon className="homeIcon" icon="check-square-o" size="5x"/>
                            <p> Keep your trips and plans updated through TravelGo then publish them with your personal review. </p>
                        </div>

                        <div className="homeParaPanel">
                            <Icon className="homeIcon" icon="question2" size="5x"/>
                            <p> Navigate your way through your profile, holidays and journal using the navigation bar on the left. </p>
                        </div>
                    </div>

                    <div className="homePanels">
                        <p className="homePanel"> You currently have <span className="boldNumber">{this.state.holidays.length}</span> registered holidays </p>
                        <p className="homePanel"> <span className="boldNumber">{total_published}</span> of these holidays are published </p>

                    </div>
                </div>
                </div>

            )
        }
    }

}

export default HomeContainer;
