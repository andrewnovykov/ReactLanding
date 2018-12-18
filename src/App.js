import React, { Component } from 'react';

import './resources/styles.css';

import Header from './components/header_footer/header';
import Featured from './components/featured/index'


class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height: '1000px', 
        background: 'green'
      }}>
       
        <Header/>
        <Featured />
        
      </div>
    );
  }
}

export default App;
