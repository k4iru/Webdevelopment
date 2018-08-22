import React, {
  Component
} from 'react';

import Footer from '../footerComponent/footer';
import Header from '../headerComponent/header';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">

      <Header />

      <Footer />
      </div>

    );
  }
}

export default Homepage;
