import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 0,
      colors: ['#016644', '#123456', '#789012', '#345678', '#d5182b', '#de13e1'], // Gradient colors
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeBackgroundColor, 900); // Change color every 1.5 seconds (1500 milliseconds)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeBackgroundColor = () => {
    const { currentColor, colors } = this.state;
    this.setState({
      currentColor: (currentColor + 1) % colors.length,
    });
  };

  render() {
    const { currentColor, colors } = this.state;
    const gradientStyle = {
      background: `linear-gradient(to bottom, ${colors[currentColor]}, #002a1c)`, // Gradient background
      color: '#a5924f',
      textAlign: 'center',
      padding: '20px 0',
      borderBottom: '5px solid #A49665',
      position: 'relative',
      transition: 'background-color 2s ease-in-out', // Add a transition effect for smoother color changes
    };

    return (
      <header className="header" style={gradientStyle}>
        <div className="header-content">
          <h1 className="header-title magical-template-1">UNC Charlotte</h1>
          <p className="header-subtitle magical-template-2">SSDI Group 10 -Page Reaction With React   JS</p>
        </div>
      </header>
    );
  }
}

export default Header;
