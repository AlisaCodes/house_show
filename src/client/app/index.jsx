import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <div>
      <div className="jumbotron">
      <h1>house show.</h1>
      </div>
      <h3> Enter a Location. Find a Show. </h3>
      <input ref="location" type="text" />
      <button type="button" className="btn btn-danger">party.</button>
    </div>
  }
}

render(<App/>, document.getElementById('app'));
