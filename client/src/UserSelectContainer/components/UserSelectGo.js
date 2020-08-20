import React, {Component} from 'react';

class UserSelectGo extends Component {
    constructor(props){
        super(props);
        this.hasSelectedTraveller = this.hasSelectedTraveller.bind(this);
    }

    hasSelectedTraveller(){
        this.props.hasSelectedTraveller();
    }

    render(){
        if (this.props.selectedTraveller !== ""){
            return (
                <button className="goButton" onClick={this.hasSelectedTraveller} type="button"> Enter </button>
            )
        }
        else {
            return null
        }
    }


}

export default UserSelectGo;
