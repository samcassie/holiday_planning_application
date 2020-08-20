import React, {Component} from 'react';
import UserSelectTitle from '../components/UserSelectTitle.js';
import UserSelectSearch from '../components/UserSelectSearch.js';
import UserSelectGo from '../components/UserSelectGo.js';
import UserSelectNewUser from '../components/UserSelectNewUser.js';
import UserSelectImage from '../components/UserSelectImage.js'
import Request from '../../helpers/request.js';


class UserSelectContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            allTravellers: [],
            selectedTraveller: '',
            isAddingUser: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.isAddingUser = this.isAddingUser.bind(this);
        this.hasSelectedTraveller = this.hasSelectedTraveller.bind(this);
        this.sendNewTravellerToMain = this.sendNewTravellerToMain.bind(this);
    }

    componentDidMount() {
        // fetch for all travellers
        const request = new Request();

        request.get('api/travellers')
        .then(data => {
            this.setState({
                allTravellers: data,
                isAddingUser: false
            });
        })
    }

    handleChange(selectedTraveller){
        // this.props.sendNewTravellerToMain(selectedTraveller);
        this.setState({selectedTraveller: selectedTraveller});
    };

    sendNewTravellerToMain(){
        this.props.sendNewTravellerToMain(this.state.selectedTraveller);
    }

    handlePost(newTraveller){
        console.log(newTraveller);
    const request = new Request();
    request.post('/api/travellers', newTraveller)
    .then(() => {
        window.location = '/';
    })
    }

    isAddingUser(){
        if (this.state.isAddingUser === false){
            this.setState({isAddingUser: true})
        } else if (this.state.isAddingUser === true){
            this.setState({isAddingUser: false});
        }
    };

    hasSelectedTraveller(){
        // unrenders the whole user select container
        this.props.hasSelectedTraveller();
        this.sendNewTravellerToMain();
    }

    render(){
        if (this.props.isSelectingTraveller === true){
            return(
                <div className="userSelectContainer">
                    <UserSelectNewUser isAddingUser={this.state.isAddingUser} onNewTraveller={this.handlePost} onToggle={this.isAddingUser}/>
                    <UserSelectTitle />
                    <UserSelectSearch travellers={this.state.allTravellers} onToggle={this.isAddingUser}onSelectTraveller={this.handleChange}/>
                    <UserSelectImage selectedTraveller={this.state.selectedTraveller} />
                    <UserSelectGo selectedTraveller={this.state.selectedTraveller} hasSelectedTraveller={this.hasSelectedTraveller}/>
                </div>
            )
        } else {
            return null
        }
    }
}

export default UserSelectContainer;
