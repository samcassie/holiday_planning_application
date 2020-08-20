import React, { Component } from 'react';
import TripList from '../components/TripList.js';
import TripForm from '../components/TripForm.js';
import TripEdit from '../components/TripEdit.js';
import Request from '../../helpers/request.js';
import PlanContainer from '../../PlanContainer/containers/PlanContainer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TripContainer extends Component {
  constructor(props){
    super(props);
    this.findTripById = this.findTripById.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  findTripById(id){
    return this.props.holiday.trips.find(trip => {
      return trip.id === parseInt(id);
    })
  }

  handlePost(trip){
    const request = new Request();
    const url = '/api/trips';
    let holiday = this.props.holiday;
    delete holiday.trips;
    trip.holiday = holiday;
    request.post(url, trip)
    .then(() => {
      this.props.fetchHolidays()
    })
  }

  handlePut(id, trip){
    const request = new Request();
    const url = `/api/trips/${id}`;
    let holiday = this.props.holiday;
    delete holiday.trips;
    trip.holiday = holiday;
    delete trip.plans;
    request.post(url, trip)
    .then(() => {
      this.props.fetchHolidays()
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = `/api/trips/${id}`
    request.delete(url)
    .then(() => {
      this.props.fetchHolidays()
    })
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/trips/new" render={(props) => {
            return <TripForm
              holiday={this.props.holiday}
              onCreate={this.handlePost} />
          }} />
          <Route exact path="/trips/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const trip = this.findTripById(id);
            return <TripEdit
              trip={trip}
              holiday={this.props.holiday}
              onUpdate={this.handlePut}
              onDelete={this.handleDelete} />
          }} />
          <Route path="/plans" render={(props) => {
            return <PlanContainer
              fetchHolidays={this.props.fetchHolidays}
              selectedTrip={this.props.selectedTrip}
              holiday={this.props.holiday} />
          }} />
          <Route render={() => {
            return <TripList
              fetchHolidays={this.props.fetchHolidays}
              trips={this.props.holiday.trips}
              handleTripSelected={this.props.handleTripSelected}
              selectedTrip={this.props.selectedTrip}
              holiday={this.props.holiday} />
          }} />
        </Switch>
      </Router>
    )
  }
}

export default TripContainer;
