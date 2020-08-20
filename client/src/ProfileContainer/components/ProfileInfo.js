import React, {Component} from 'react';

class ProfileInfo extends Component {
    constructor(props){
        super(props);

        this.handlePopUp = this.handlePopUp.bind(this);
    }


        handlePopUp(){
            this.props.onToggle();
        }

        render(){
            return (
              <div className="container">
                <div className="profileInfo">
                    <h3 className="profileTitle"> My Profile</h3>
                <div className="profileSections">

                <div className="profileSection">
                    <h3 className="sectionLabel">Name</h3>
                <p className="profileName"> {this.props.profile.name} </p>
                </div>

                <div className="profileSection">
                    <h3 className="sectionLabel">Image</h3>
                    <img className="profileImage" src={`../../../images/${this.props.profile.image}.jpg`} name="image1" alt=""/>
                </div>

                </div>
                    <div className="editButton">
                    <h3 className="editProfile" onClick={this.handlePopUp}>Edit Details</h3>
                </div>
                </div>
              </div>
            )
        }
    }

    export default ProfileInfo;
