import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Assets/css/normalize.css';
import './Assets/css/default.min.css';
import Homepage from './components/pages/homePage';
import Mainmenu from './components/menuComponent/mainmenu';
library.add(faBars);
class App extends Component {

  render() {
    return (
      <div className="App">

        <Mainmenu width={ 280 }  />
      <FontAwesomeIcon icon="bars" size='2x'/>

        <Homepage />

      </div>
    );
  }
}

export default App;
