import React, {
  Component
} from 'react';
import { slide as Menu } from 'react-burger-menu';

class Mainmenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/">About</a>
      <a id="contact" className="menu-item" href="/">Contact</a>
      <a onClick={ this.showSettings } className="menu-item--medium" href="">Settings</a>
      </Menu>
    );
  }
}

export default Mainmenu;
