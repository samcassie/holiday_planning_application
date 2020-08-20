import React, {Component, Fragment} from 'react';
import ProfileInfo from '../components/ProfileInfo.js';
import ProfileEditPage from '../components/ProfileEditPage.js';
import ProfileNavBar from '../components/ProfileNavBar.js';
import Request from '../../helpers/request.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ProfileContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditingUser: false
        }
        this.isEditingUser = this.isEditingUser.bind(this);
        this.handlePut = this.handlePut.bind(this);
    }


    isEditingUser(){
        if (this.state.isEditingUser === false){
            this.setState({isEditingUser: true})
        } else if (this.state.isEditingUser === true){
            this.setState({isEditingUser: false});
        }
    };

    handlePut(id, newTraveller){
        newTraveller.id = id;

        const request = new Request();
        const url = `/api/travellers/${id}`;

        request.post(url, newTraveller)
        .then(() => {
          this.props.renderNewDetails(newTraveller);
        });
    }

    render(){
        return (
          <Router>
            <div className="extended-container">
              <ProfileNavBar selectedTraveller={this.props.selectedTraveller} logOut={this.props.logOut} />
                <Switch>
                  <Route exact path="/profile/edit" render={(props) => {
                    return <ProfileEditPage onEditTraveller={this.handlePut} onToggle={this.isEditingUser} isEditingUser={this.state.isEditingUser} profile={this.props.selectedTraveller} />
                  }} />
                  <Route render={(props) => {
                    return <ProfileInfo onToggle={this.isEditingUser} profile={this.props.selectedTraveller}/>
                  }} />
                </Switch>
            </div>
          </Router>
        )
    }

}

export default ProfileContainer;
