import React, { Component } from 'react';
import SelectedImage from '../../UserSelectContainer/components/SelectedImage.js';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class ProfileEditPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTraveller: this.props.profile,
            confirmed: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageSelect = this.handleImageSelect.bind(this);
        this.handlePopUp = this.handlePopUp.bind(this);
    }

    componentDidMount(){
      this.props.onToggle();
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
        let id = this.props.profile.id;
        this.props.onEditTraveller(id, this.state.newTraveller);
        this.props.onToggle();
        this.setState({confirmed: true})
    }

    render(){

          if(!this.state.confirmed){
            return(
                <div className="container">
                  <div className="edit-user-screen">
                    <form className="edit-user-form" onSubmit={this.handleSubmit}>

                        <div className="enterName">
                            <div>
                                <label className="nameLabel"> Name </label>
                                <input onChange={this.handleNameChange} value={this.state.newTraveller.name} placeholder={this.props.profile.name} name="name" />
                            </div>
                            <SelectedImage selectedImage={this.state.newTraveller["image"]}/>
                        </div>

                        <div className="selectableImages">
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image1.jpg" name="image1" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image2.jpg" name="image2" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image3.jpg" name="image3" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image4.jpg" name="image4" alt=""/>
                        </div>
                        <div className="selectableImages">
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image5.jpg" name="image5" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image6.jpg" name="image6" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image7.jpg" name="image7" alt=""/>
                            <img className="selectableImage" onClick={this.handleImageSelect} src="/images/image8.jpg" name="image8" alt=""/>
                        </div>

                        <div>
                            <button className="nav-buttons-white" type="submit"> Edit Details</button>
                            <button className="nav-buttons-white" type="button" onClick={this.handlePopUp}>Cancel</button>
                        </div>
                    </form>
                  </div>
              </div>
            )
        }else{
          return (
            <Confirmation url="/profile" heading={true} />
          )
        }

    }
}

export default ProfileEditPage;
