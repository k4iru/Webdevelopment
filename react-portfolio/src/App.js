import React, { Component } from 'react';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
