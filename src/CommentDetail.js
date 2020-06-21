// Import Files
import React from 'react';

// Props
// avatar - profile image of person
// author - name or username of person
// timeStamp - time that person commented
// comment - person's comment

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeStamp}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;