import React, { Component } from "react";
import Confirmation from '../../../MainContainer/components/Confirmation.js';

class CommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    comment:{
      traveller:props.selectedTraveller,
      comment:'',
      date: new Date()
    },
    confirmed: false
  };

this.handleTextChange = this.handleTextChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.toggleConfirmed = this.toggleConfirmed.bind(this);

}

toggleConfirmed(){
this.setState({confirmed: false})
}



handleTextChange(event) {
   let comment=this.state.comment;
  comment.comment=event.target.value
  this.setState({comment: comment});
}

handleSubmit(event) {
  event.preventDefault();


  const text = this.state.comment.comment.trim();
  //send
  this.setState({text: text, confirmed: true});
  this.props.onCreate(this.state.comment)
}

  render(){

    if(!this.state.confirmed){
      return(
        <form className="comment-form" onSubmit= {this.handleSubmit}>
        <input type='text'placeholder = 'Say something'value={this.state.comment.text} onChange={this.handleTextChange}/>
        <input type='submit'/>
        </form>
      )
    }else{
      return (
        <Confirmation toggleConfirmed={this.toggleConfirmed} url={"/journal/" + this.props.holiday.id} heading={false} />
      )
    }


  }


}

export default CommentForm;
