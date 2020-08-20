import React, {Component}from 'react';

class UserSelectImage extends Component {
    constructor(props){
        super(props);
    }


    render(){

        if (this.props.selectedTraveller !== ""){
            return(
                <img className="userSelectImage" src={`./images/${this.props.selectedTraveller.image}.jpg`} alt="" />
            )
        } else {
            return null
        }
    }

}

export default UserSelectImage;
