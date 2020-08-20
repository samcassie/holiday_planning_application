import React, { Component } from "react";
import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";
import Request from '../../helpers/request';

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(comment){
    const request = new Request();
    const url = '/api/comments'
    let trip = this.props.selectedTrip;
    delete trip.plans;
    comment.trip = trip;
    request.post(url, comment)
    .then(() => {
      this.props.fetchHolidays();
      this.props.fetchComments();
    })
  }

  render(){
    return (
      <div className="comment-box">

        <CommentForm onCreate={this.handlePost} selectedTrip={this.props.selectedTrip} selectedTraveller={this.props.selectedTraveller} comments = {this.props.comments} holiday={this.props.holiday} />
        <h2>Comments</h2>
        <CommentList comments={this.props.comments} />

      </div>
    )
  }

}


export default CommentBox;
