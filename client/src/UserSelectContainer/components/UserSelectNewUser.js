import React, { Component } from 'react';
import SelectedImage from './SelectedImage.js'

class UserSelectNewUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTraveller: {
                name: "",
                image: ""

            }
        }
        this.handlePopUp = this.handlePopUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageSelect = this.handleImageSelect.bind(this);
    }

    handlePopUp(){
        this.props.onToggle();
    }

    handleNameChange(event){
        let propertyName = event.target.name;
        let newTraveller = this.state.newTraveller;
        newTraveller[propertyName] = event.target.value;
        this.setState({newTraveller: newTraveller});
    }

    handleImageSelect(event){
        let image = "image";
        let newTraveller = this.state.newTraveller;
        newTraveller[image] = event.target.name;
        this.setState({newTraveller: newTraveller});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onNewTraveller(this.state.newTraveller);
        this.props.onToggle();
    }

    render(){

        if (this.props.isAddingUser === true){
            return(

                <div className="addUserBackground">
                    <form className="addUserForm" onSubmit={this.handleSubmit}>

                        <div className="enterName">
                            <div>
                                <label className="nameLabel"> Name </label>
                                <input onChange={this.handleNameChange} value={this.state.newTraveller.name} name="name" />
                            </div>
                            <SelectedImage selectedImage={this.state.newTraveller["image"]}/>
                        </div>

                        <div className="selectableImages">
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image1.jpg" name="image1" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image2.jpg" name="image2" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image3.jpg" name="image3" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image4.jpg" name="image4" alt=""/>
                        </div>
                        <div className="selectableImages">
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image5.jpg" name="image5" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image6.jpg" name="image6" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image7.jpg" name="image7" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="./images/image8.jpg" name="image8" alt=""/>
                        </div>

                        <div>
                            <button className="nav-buttons-white" type="submit"> Add User</button>
                            <button className="nav-buttons-white" type="button" onClick={this.handlePopUp}>Cancel</button>
                        </div>
                    </form>
                </div>
            )
        }

        return null;
    }
}

export default UserSelectNewUser;
