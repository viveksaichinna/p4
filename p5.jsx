import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
// eslint-disable-next-line import/no-unresolved
import Header from './components/header/Header';
import Example from './components/example/Example';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        displayExample: true,
      };
    }
  
    toggleDisplay = () => {
      this.setState((prevState) => ({
        displayExample: !prevState.displayExample,
      }));
    };
  
    render() {
      const { displayExample } = this.state;
      return (
        /*<div>
          <button onClick={this.toggleDisplay}>
            Switch to {displayExample ? 'States' : 'Example'}
          </button>
          {displayExample ? <Example /> : <States />}
        </div>*/
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
  <button
    style={{
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px', // Adjust the font size
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    }}
    onClick={this.toggleDisplay}
  >
    Click Button for Switching to {displayExample ? 'States' : 'Example'}
  </button>
  {displayExample ? <Example /> : <States />}
        </div>

      );
    }
  }

ReactDOM.render(
    <div>
        <Header/>
        <hr></hr>
    <App/>
    </div>,
    document.getElementById('reactapp'),
  );