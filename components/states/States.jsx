import React from 'react';
import './States.css';

class States extends React.Component {
  constructor(props) {
    super(props);
this.state = {
  val: '',
};
}

function = () => {
  var li=[];
  const { val } = this.state;
  li=window.models.states().filter((state) =>  state.toLowerCase().includes(val)  );
  return li;
  };

handlingChange = (e) => {
this.setState({ val: e.target.value.toLowerCase() });
};

render() {
const filteredStates = this.function();

return (
  <div >
    <h1 style={{
  textAlign: 'center',      // Center the text horizontally
  backgroundColor: 'lightblue', // Add background color
  color: 'darkblue',         // Set text color
  padding: '10px'           // Add some padding for spacing
}}>
  States View
    </h1>
<p>You Can Enter Text Here</p>
    <input
  type="text"
  placeholder="Enter Text"
  value={this.state.val}
  onChange={this.handlingChange}
  style={{
    padding: '10px',                 // Add padding
    fontSize: '16px',                // Set font size
    borderRadius: '5px',             // Add rounded corners
    border: '2px solid #3498db',     // Add a border
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    outline: 'none',                 // Remove the default outline
    transition: 'border 0.3s',       // Add a smooth transition on hover
  }}
  // eslint-disable-next-line no-return-assign
  onFocus={(e) => e.target.style.border = '2px solid #e74c3c'} // Change border color on focus
  // eslint-disable-next-line no-return-assign
  onBlur={(e) => e.target.style.border = '2px solid #3498db'} // Restore original border color on blur
/>

    <p>You can see the output after entering</p>

    {filteredStates.length !== 0 ? (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {filteredStates.map((state, ind) => (
      <li
        key={ind}
        style={{
          margin: '5px 0',
          backgroundColor: '#E8ECFD',
          color: 'navy',               
          fontSize: '25px',            
        }}
      >
        {state}
      </li>
    ))}
  </ul>
) : (
  <p style={{ color: 'lightcoral', fontStyle: 'italic', fontSize: '18px' }}>
    No states with mentioned words
  </p>
)}


  </div>
);
}
}

export default States;
