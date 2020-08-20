import React, { Component, Fragment } from 'react';
import { Timeline, Icon } from 'rsuite';
import { Link } from 'react-router-dom';
import Event from './Event.js';
import Flight from './Flight.js';
import Accommodation from './Accommodation.js';
import Train from './Train.js';
import DateFormat from '../../helpers/DateFormat.js';

class PlanList extends Component {
  constructor(props){
    super(props)
    this.handleAddPlan = this.handleAddPlan.bind(this);
  }

  handleAddPlan(){
    this.props.handleTripSelected(this.props.trip);
  }

  render(){
    const dateFormatter = new DateFormat();

    let planList = null;

    if(this.props.plans){

    function compare(a, b){
      const aDate = a.date
      const bDate = b.date

      let comparison = 0;
      if(aDate > bDate){
        comparison = 1;
      }else if(aDate < bDate){
        comparison = -1;
      }
      return comparison
    }

    let sortedPlans = this.props.plans.sort(compare)

    planList = sortedPlans.map((plan, index) => {
      switch(plan.planType){
        case "FLIGHT":
          return (
            <Timeline.Item key={index} dot={<Icon icon="plane" size="2x" />}>
              <p>{dateFormatter.format(plan.date)}</p>
              <h5>Flight</h5>
              <Flight handleTripSelected={this.props.handleTripSelected} trip={this.props.trip} plan={plan} />
            </Timeline.Item>
          );
        case "EVENT":
          return (
            <Timeline.Item key={index} dot={<Icon icon="calendar" size="2x"/>}>
              <p>{dateFormatter.format(plan.date)}</p>
              <h5>Event</h5>
              <Event handleTripSelected={this.props.handleTripSelected} trip={this.props.trip} plan={plan} />
            </Timeline.Item>
          );
        case "ACCOMMODATION":
          return (
            <Timeline.Item key={index} dot={<Icon icon="bed" size="2x" />}>
              <p>{dateFormatter.format(plan.date)}</p>
              <h5>Accommodation</h5>
              <Accommodation handleTripSelected={this.props.handleTripSelected} trip={this.props.trip} plan={plan} />
            </Timeline.Item>
          );
        case "TRAIN":
          return (
            <Timeline.Item key={index} dot={<Icon icon="train" size="2x" />}>
              <p>{dateFormatter.format(plan.date)}</p>
              <h5>Train</h5>
              <Train handleTripSelected={this.props.handleTripSelected} trip={this.props.trip} plan={plan} />
            </Timeline.Item>
          );
        default:
          return null
        }
      })
    }

    return (
      <Fragment>
        <div className="buttons-centered">
          <Link to={"/plans/new"} onClick={this.handleAddPlan} className="nav-buttons-green">Add a Plan</Link>
        </div>
        <Timeline className="custom-timeline">
          {planList}
        </Timeline>
      </Fragment>
    )
  }
}

export default PlanList;
