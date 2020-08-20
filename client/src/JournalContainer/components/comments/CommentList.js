import React, { Component } from "react";
import Comment from "./Comment";


class CommentList extends Component {


  render() {
    if(this.props.comments.length === 0){
      return null
    }

    const commentNodes = this.props.comments.map(comment => {
      return (
        <Comment author={comment.traveller.name} key={comment.id}>
            {comment.comment}
        </Comment>
      );
    });

    return (
      <ul className="no-bullet">
        {commentNodes}
      </ul>
    );
  }
}

export default CommentList;
