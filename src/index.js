// Import Files
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; // Allows for simulating data

import CommentDetail from './CommentDetail';

// Main app
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeStamp="Today at 4:45PM" avatar={faker.image.avatar()} comment="Nice blog!" />
      <CommentDetail author="James" timeStamp="Today at 1:43PM" avatar={faker.image.avatar()} comment="Informational, thanks." />
      <CommentDetail author="Sarah" timeStamp="Yesterday at 3:30PM" avatar={faker.image.avatar()} comment="Love your blogs" />
    </div>
  );
};

// Renders content to the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);