import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <li className="comment">
        <p>{this.props.children}</p>
        <p>{this.props.author}</p>
      </li>
    );
  }
}

export default Comment;
