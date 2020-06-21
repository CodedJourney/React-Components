// Import Files
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; // Allows me to use fake data for testing components out
// Main app
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

// Renders content to the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);