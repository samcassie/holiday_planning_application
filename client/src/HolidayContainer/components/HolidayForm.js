import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class HolidayForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      holiday: {
        title: "",
        travellers: [],
        published: false
      },
      confirmed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTravellerChange = this.handleTravellerChange.bind(this);
  }

  componentDidMount(){
    let holiday = this.state.holiday;
    holiday.travellers.push(this.props.selectedTraveller);
    this.setState({holiday: holiday});
  }

  handleTravellerChange(event){
    const id = event.target.value;
    const traveller = this.props.findTravellerById(id);
    let holiday = this.state.holiday;

    if(event.target.checked === true){
      holiday.travellers.push(traveller);
    }else{
      const index = holiday.travellers.findIndex((foundTraveller) => {
        return foundTraveller.id === traveller.id
      })
      holiday.travellers.splice(index, 1);
    }

    this.setState({holiday: holiday})
  }

  handleChange(event){
    let propertyName = event.target.name;
    let holiday = this.state.holiday;
    holiday[propertyName] = event.target.value;
    this.setState({holiday: holiday});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.holiday);
    this.setState({confirmed: true})
  }

  render(){
    let travellerCheckboxes = this.props.travellers.map((traveller, index) => {
      if(traveller.id !== this.props.selectedTraveller.id){
        return (
          <li key={index}>
            <input type="checkbox" value={traveller.id} id={traveller.id} onChange={this.handleTravellerChange}></input>
            <label className="normal-weight" htmlFor={traveller.id}>{traveller.name}</label>
          </li>
        )
      }else{
        return null
      }
    })

    if(!this.state.confirmed){
      return (
        <Fragment>
          <div className="container-header">
            <h1 className="container-title">Create A New Holiday</h1>
          </div>
          <br />
          <p>To create a new holiday, enter the holiday title, select any travellers who are joining you and click "Create".</p>
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form-content">
              <div className="form-item">
                <label htmlFor="title">Holiday Title:</label>
                <input type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.holiday.title}/>
              </div>
              <div className="form-item">
                <label htmlFor="travellers">Travellers:</label>
                <ul className="no-bullet">
                  {travellerCheckboxes}
                </ul>
              </div>
              <div className="buttons-centered">
                <input type="submit" value="Create" className="nav-buttons-green" />
              </div>
            </form>
          </div>
        </Fragment>
      )
    }else{
      return (
        <Confirmation url="/holidays" heading={true} />
      )
    }

  }
}

export default HolidayForm;
