import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import JournalList from '../components/JournalList.js';
import JournalDetail from '../components/JournalDetail.js';
import JournalNavBar from '../components/JournalNavBar.js';
import JournalWelcome from '../components/JournalWelcome.js';

class JournalContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: [],
      comments: []
    }
    this.fetchHolidays = this.fetchHolidays.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  componentDidMount(){
    this.fetchHolidays()
    this.fetchComments()
  }

  findHolidayById(id){
    return this.state.holidays.find(holiday => {
      return holiday.id === parseInt(id);
    })
  }

  fetchHolidays(){
    const request = new Request();


    const url = '/api/holidays?travellerId=' + this.props.selectedTraveller.id
    request.get(url)
    .then((data) => {
      this.setState({holidays: data})
    })
  }

  fetchComments(){
    const request = new Request();

    const url = '/api/comments?travellerId=' + this.props.selectedTraveller.id
    request.get(url)
    .then((data) => {
      this.setState({comments: data})
    })
  }

  render(){
    if(this.state.holidays.length === 0){
      return null
    }
    else{
      const published = this.state.holidays.filter(holiday => holiday.published);
    return (

      <Router>
        <div className="extended-container">
          <JournalNavBar logOut={this.props.logOut} selectedTraveller={this.props.selectedTraveller} />
          <div className="container">
            <Switch>
              <Route exact path="/journal/welcome" render={(props) => {
                return <JournalWelcome />
              }} />
              <Route exact path="/journal/:id" render={(props) => {
                const id = props.match.params.id;
                const holiday = this.findHolidayById(id);
                return <JournalDetail fetchComments={this.fetchComments} fetchHolidays={this.fetchHolidays} selectedTraveller={this.props.selectedTraveller} holiday={holiday} comments={this.state.comments} />
              }} />
              <Route render={(props) => {
                return <JournalList holidays={published} comments={this.state.comments} />
              }} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
}

export default JournalContainer;
