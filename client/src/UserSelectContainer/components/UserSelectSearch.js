import React, {Component} from 'react';

class UserSelectSearch extends Component {
    constructor(props){
        // Will have travellers as a prop
        // Will have onSelectTraveller as prop function
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handlePopUp = this.handlePopUp.bind(this);
    }

    handleChange(event){
        const index = parseInt(event.target.value);
        const selectedTraveller = this.props.travellers[index];
        this.props.onSelectTraveller(selectedTraveller);
    }

    handlePopUp(){
        this.props.onToggle();
    }

    render(){
        if(this.props.travellers.length===0){
            return(
                <div>
                    <select className="selectTraveller searchAndAdd" name="travellersList"defaultValue="select-traveller">
                        <option disabled value="select-traveller">No travellers registered</option>
                    </select>
                </div>

            )
        }

        const travellerOptions = this.props.travellers.map((traveller, index) => {
            return <option className="selectedTravellerOption" key={index} value={index}>{traveller.name}</option>
        })

        return (
            <div className="searchAndAdd">
                <button type="button" className="addUser" onClick={this.handlePopUp}> + </button>
                <select name="travellersList" className="selectTraveller" onChange={this.handleChange} defaultValue="select-traveller">
                    <option disabled value="select-traveller">Select traveller</option>
                    {travellerOptions}
                </select>
            </div>
        )
    }
}

export default UserSelectSearch;
